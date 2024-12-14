"use client";

import PhotographerCard from "@/components/shared/photographer-card";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const RightAside = () => {
  const pathname = usePathname();

  if (
    pathname === "/explore" ||
    pathname === "/people" ||
    pathname === "/create-post" ||
    pathname === "/profile" ||
    pathname === "/settings" ||
    pathname === "/settings/profile" ||
    pathname === "/settings/privacy" ||
    pathname === "/settings/notifications" ||
    pathname === "/settings/appearance" ||
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/forgot-password" ||
    pathname === "/verify"
  )
    return null;

  return (
    <aside
      className="hidden ml-1 border-l xl:block"
      aria-label="Sidebar recommendations"
    >
      <div className="p-4 space-y-6">
        <section aria-label="Suggested photographers">
          <h3 className="mb-4 text-lg font-semibold">
            Suggested Photographers
          </h3>
          <div className="space-y-2">
            <PhotographerCard />
          </div>
        </section>
        <section aria-label="Trending hashtags">
          <h3 className="mb-4 text-lg font-semibold">Trending Hashtags</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="transition-all hover:bg-primary hover:text-primary-foreground"
            >
              #nature
              <span className="ml-1 text-xs text-muted-foreground">1.2k</span>
            </Button>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default RightAside;
