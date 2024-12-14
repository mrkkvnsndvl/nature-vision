"use client";

import { Button } from "@/components/ui/button";
import { bottomNavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathname = usePathname();

  if (
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/forgot-password" ||
    pathname === "/verify"
  )
    return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full border-t bg-background xl:hidden">
      <div className="grid grid-cols-4 justify-items-center items-center h-16">
        {bottomNavLinks.map((link) => (
          <Link href={link.href} key={link.label}>
            <Button variant="ghost" size="icon" className="w-12 h-12">
              <link.icon
                className={`w-5 h-5 ${
                  pathname === link.href && "text-green-600"
                }`}
              />
              <span className="sr-only">{link.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
