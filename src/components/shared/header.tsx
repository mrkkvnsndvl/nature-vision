import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  if (
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/forgot-password" ||
    pathname === "/verify"
  )
    return null;

  return (
    <header className="sticky top-0 w-full border-b  bg-background">
      <div className="flex items-center h-14">
        <div className="flex gap-2 items-center font-semibold md:mr-4">
          <Image
            src="/assets/svgs/favicon.svg"
            width={0}
            height={0}
            className="w-6 h-8"
            alt="Nature Vision Logo"
            priority
          />
          <span className="hidden md:inline-block">Nature Vision</span>
        </div>
        <div className="flex items-center ml-auto space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="w-5 h-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] lg:w-[440px] xl:w-[380px] p-0"
              sideOffset={8}
            >
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <div className="flex gap-2 items-center">
                  <span className="text-sm font-semibold">Notifications</span>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
                    3
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-2 h-8 text-xs hover:bg-primary/5"
                >
                  Mark all as read
                </Button>
              </div>
              <ScrollArea className="h-[calc(85vh-10rem)] sm:h-[450px]">
                <div className="grid gap-1 p-1">
                  <DropdownMenuItem className="flex flex-col items-start rounded-lg gap-1 p-3 data-[highlighted]:bg-primary/5 relative bg-primary/[0.03]">
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex gap-2 items-center">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium leading-none">
                          John Photographer
                        </span>
                        <span className="text-xs text-muted-foreground">
                          2 hours ago
                        </span>
                      </div>
                    </div>
                    <p className="pl-10 text-sm text-muted-foreground">
                      Liked your photo "Sunset at Mountain Peak"
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start rounded-lg gap-1 p-3 data-[highlighted]:bg-primary/5 relative bg-primary/[0.03]">
                    <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex gap-2 items-center">
                      <Avatar className="w-8 h-8 border">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium leading-none">
                          Jane Nature
                        </span>
                        <span className="text-xs text-muted-foreground">
                          5 hours ago
                        </span>
                      </div>
                    </div>
                    <p className="pl-10 text-sm text-muted-foreground">
                      Started following you
                    </p>
                  </DropdownMenuItem>
                </div>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative w-8 h-8 rounded-full">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href="/profile">
                <DropdownMenuItem>My profile</DropdownMenuItem>
              </Link>
              <Link href="/settings">
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
