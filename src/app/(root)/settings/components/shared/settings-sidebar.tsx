"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { sidebarNavItems } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsSidebar = () => {
  const pathname = usePathname();

  return (
    <ScrollArea className="w-full lg:h-full">
      <nav className="flex gap-1 pb-4 lg:flex-col lg:pb-0">
        {sidebarNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
          >
            <item.icon size={20} />
            <span className="flex-1">{item.title}</span>
            <ChevronRightIcon className="hidden w-4 h-4 lg:block" />
          </Link>
        ))}
      </nav>
      <ScrollBar orientation="horizontal" className="lg:hidden" />
    </ScrollArea>
  );
};

export default SettingsSidebar;
