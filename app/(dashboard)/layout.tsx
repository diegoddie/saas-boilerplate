import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabaseClient = createClient();
  const { data } = await supabaseClient.auth.getUser();

  return (
    <div className="min-h-screen flex flex-col">
        <Navbar user={data.user}/>
        <div className="flex-1">
          {children}
        </div>
        <Footer />
    </div>
  );
}