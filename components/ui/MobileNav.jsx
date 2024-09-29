"use client";

// Import necessary components
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"; // Importing icon for the menu


const links = [
    {
        name: "Home", 
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

// MobileNav component
const MobileNav = () => {
  return (
    <Sheet>
      {/* Mobile navigation menu */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {links.map((link) => (
                <Link key={link.name} href={link.path} className="py-4 text-center text-xl">
                    {link.name}
                </Link>
            ))}
        </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
