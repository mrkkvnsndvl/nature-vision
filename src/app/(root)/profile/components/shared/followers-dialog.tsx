"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { SearchIcon, UserPlusIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FollowersDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-0.5 sm:gap-2 hover:text-foreground transition-colors cursor-pointer">
          <UsersIcon className="w-2.5 h-2.5 sm:w-5 sm:h-5" />
          <span className="text-xs font-semibold sm:text-lg">10</span>
          <span className="text-muted-foreground text-[10px] sm:text-base">
            followers
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg capitalize sm:text-2xl">
            Followers
          </DialogTitle>
          <DialogDescription>
            Manage your followers list and interact with other users.
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-2">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-8 h-9" />
        </div>
        <ScrollArea className="h-[50vh] sm:h-[60vh] mt-4 pr-4">
          <div className="space-y-4">
            <div
              className={cn(
                "flex gap-2 justify-between items-center p-2 rounded-lg transition-colors",
                "hover:bg-muted/50"
              )}
            >
              <Link
                href={`/profile/`}
                className="flex flex-1 gap-3 items-center min-w-0"
              >
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Maria Santos Cruz"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate sm:text-base">
                    Maria Santos Cruz
                  </p>
                  <p className="text-xs truncate sm:text-sm text-muted-foreground">
                    @mariascruz
                  </p>
                </div>
              </Link>
              <Button
                size="sm"
                className="h-8 sm:h-9 text-xs sm:text-sm gap-1.5"
              >
                <UserPlusIcon className="h-3.5 w-3.5" />
                Follow
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FollowersDialog;
