import Logo from "../icons/logo";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";
import Link from "next/link";
import { User } from "@supabase/supabase-js";

interface NavbarProps {
    user?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }: NavbarProps) => {
  return (
    <div className="bg-white text-black">
        <div className="flex max-w-7xl mx-auto p-8 items-center">
            <div className="flex-1">
                <Link href='/'>
                    <Logo className="h-10 md:h-16 w-52 md:w-64" />
                </Link>
            </div>
            <div>
                {user ? (
                    <div className="flex gap-8 items-center">
                        <Link href="/courses" className="uppercase font-bold underline hover:no-underline">Courses</Link>
                        <UserMenu user={user} />
                    </div>
                ) : (
                    <Button variant={"outline"} asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Navbar;
