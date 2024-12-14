"use client";

import { Button } from "@/components/ui/button";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftAside = () => {
  const pathname = usePathname();

  if (
    pathname.startsWith("/settings") ||
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/forgot-password" ||
    pathname === "/verify"
  )
    return null;

  return (
    <aside className="space-y-4 p-4 border-r hidden xl:block h-[calc(100svh_-_57px)]">
      <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">Menu</h2>
      <div className="space-y-1">
        {headerLinks.map((link) => (
          <Link href={link.href} key={link.label}>
            <Button
              variant="ghost"
              className={`justify-start w-full ${
                pathname === link.href
                  ? "font-semibold text-green-600 hover:text-green-600"
                  : ""
              }`}
            >
              <link.icon
                className={`w-4 h-4 mr-2 ${
                  pathname === link.href && "text-green-600"
                }`}
              />
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default LeftAside;
