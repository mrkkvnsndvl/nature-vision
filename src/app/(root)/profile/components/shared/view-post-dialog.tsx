"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { BookmarkIcon, HeartIcon, ViewIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ViewPostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="group relative flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium md:text-sm outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring">
        <ViewIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        View Post
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden sm:max-w-5xl gap-0 rounded-lg">
        <VisuallyHidden>
          <DialogTitle>View Post</DialogTitle>
          <DialogDescription>View Post</DialogDescription>
        </VisuallyHidden>
        <div className="grid grid-cols-1 h-full sm:grid-cols-2 bg-background">
          <div className="relative bg-black/95 aspect-square sm:aspect-auto sm:h-[85vh] w-full">
            <Image
              src="/assets/images/example.jpg"
              alt="Nature photograph"
              fill
              priority
              className="object-cover aspect-square transition-opacity duration-300"
            />
          </div>
          <div className="flex flex-col h-full max-h-[60vh] sm:max-h-[85vh] bg-background">
            <div className="flex justify-between items-center p-4 border-b sm:p-5">
              <Link
                href={`/profile`}
                className="flex gap-3 items-center transition-opacity duration-200 hover:opacity-80"
              >
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Maria Santos Cruz"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-border"
                />
                <div>
                  <p className="mb-1 text-sm font-medium leading-none">
                    Maria Santos Cruz
                  </p>
                  <p className="text-xs text-muted-foreground">@mariascruz</p>
                </div>
              </Link>
            </div>
            <div className="overflow-y-auto flex-1 p-4 border-b sm:p-5 scrollbar-thin scrollbar-thumb-accent scrollbar-track-background">
              <h3 className="mb-2 text-base font-semibold tracking-tight">
                Nature Photograph
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This is a beautiful nature photograph taken by Maria Santos
                Cruz.
              </p>
            </div>
            <div className="p-4 sm:p-5 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex justify-between items-center mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-full transition-colors duration-200 hover:text-red-500 hover:bg-red-500/10"
                >
                  <HeartIcon className="w-[18px] h-[18px]" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-full transition-colors duration-200 hover:bg-accent"
                >
                  <BookmarkIcon className="w-[18px] h-[18px]" />
                </Button>
              </div>
              <div className="flex gap-4 items-center text-sm">
                <p className="font-medium">1.2k likes</p>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <p className="text-muted-foreground">1.2k saves</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewPostDialog;
