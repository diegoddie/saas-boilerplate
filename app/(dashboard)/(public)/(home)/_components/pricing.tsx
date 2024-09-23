import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { handleSubscribe } from "../action"

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$2,99",
      priceId: process.env.PRICE_ID,
      description: "Perfect for individuals and small teams just getting started.",
      features: ["Up to 5 projects", "1GB storage", "Basic support", "48-hour response time"],
      cta: "Start Free Trial",
    },
    {
      name: "Pro",
      price: "$4,99",
      priceId: process.env.PRICE_ID,
      description: "Ideal for growing businesses and professional developers.",
      features: ["Unlimited projects", "10GB storage", "Priority support", "24-hour response time", "API access"],
      cta: "Get Started",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      priceId: process.env.PRICE_ID,
      description: "For large-scale applications and teams that need more.",
      features: [
        "Unlimited projects",
        "Unlimited storage",
        "24/7 dedicated support",
        "1-hour response time",
        "API access",
        "Custom integrations",
      ],
      cta: "Contact Sales",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that&apos;s right for you. All plans come with a 14-day money-back guarantee.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col justify-between ${
                tier.recommended ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="text-4xl font-bold">
                  {tier.price}
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <form action={handleSubscribe}>
                  <input type="hidden" name="price" value={tier.priceId} />
                  <Button type="submit" className="w-full" variant={tier.recommended ? "default" : "outline"}>
                    {tier.cta}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}