import { stripe } from "@/utils/stripe/stripe";
import { supabaseAdmin } from "@/utils/supabase/admin";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    let event;

    const body = await req.text();
    const requestHeaders = new Headers(req.headers);

    const sig = requestHeaders.get("stripe-signature") as string | string[];
    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_KEY ?? "");
    } catch (err) { // Removed ': any'
        return NextResponse.json({ ok: false }, { status: 400 });
    }

    try {
        switch (event.type) {
            case "invoice.payment_succeeded":
                const paymentInvoiceSucceeded = event.data.object as { customer_email?: string, customer?: string, customer_name?: string }; // Replaced 'any' with specific type
                console.log(paymentInvoiceSucceeded);
                const customerEmail: string = paymentInvoiceSucceeded.customer_email || "g.funicello@gmail.com";
                // Removed unused variable 'const supabase = createClient();'
                const { data, error } = await supabaseAdmin.from('subscriptions').upsert({
                    email: customerEmail,
                    stripe_id: paymentInvoiceSucceeded.customer || "id",
                }, {
                    onConflict: 'email'
                });
                console.log(data);
                if (error) {
                    console.log(error);
                    return NextResponse.json({ ok: false }, { status: 500 });
                }

                // Removed unused variable 'const customerName: string = paymentInvoiceSucceeded.customer_name || "giuppi";'

                break;
            case "customer.subscription.deleted":
                const customerSub = event.data.object as { customer_email?: string, customer?: string }; // Replaced 'any' with specific type

                const customerSubEmail: string = customerSub.customer_email || "g.funicello@gmail.com";

                const { error: errorSub } = await supabaseAdmin
                    .from("subscriptions")
                    .upsert(
                        {
                            email: customerSubEmail,
                            active: false,
                            stripe_id: customerSub.customer || "id",
                        },
                        { onConflict: "email" }
                    );

                if (errorSub) {
                    console.log(errorSub.message);
                    return NextResponse.json({ ok: false }, { status: 500 });
                }

                break;
            default:
                console.log("Unhandled event type", event.type);
        }

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (err) { // Removed ': any'
        console.log(err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}