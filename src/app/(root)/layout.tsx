"use client";

import BottomNav from "@/components/shared/bottom-nav";
import Header from "@/components/shared/header";
import LeftAside from "@/components/shared/left-aside";
import RightAside from "@/components/shared/right-aside";
import { usePathname } from "next/navigation";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 xl:grid-cols-5">
        <LeftAside />
        <main
          className={`
            ${
              pathname === "/explore" ||
              pathname === "/people" ||
              pathname === "/create-post" ||
              pathname === "/profile"
                ? "col-span-4"
                : pathname === "/settings" ||
                  pathname === "/settings/profile" ||
                  pathname === "/settings/privacy" ||
                  pathname === "/settings/notifications" ||
                  pathname === "/settings/appearance" ||
                  pathname === "/sign-up" ||
                  pathname === "/sign-in" ||
                  pathname === "/forgot-password" ||
                  pathname === "/verify"
                ? "col-span-5"
                : "col-span-3"
            }
          `}
        >
          {children}
        </main>
        <RightAside />
      </div>
      <BottomNav />
    </>
  );
};

export default HomeLayout;
