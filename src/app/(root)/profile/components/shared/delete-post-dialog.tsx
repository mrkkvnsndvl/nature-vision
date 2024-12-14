"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";

const DeletePostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-[12px] md:text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full hover:bg-accent hover:text-accent-foreground text-destructive">
        <Trash2Icon className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
        Delete Post
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center text-lg text-destructive sm:text-2xl">
            <Trash2Icon className="w-5 h-5 sm:h-6 sm:w-6" />
            Delete Post
          </DialogTitle>
          <DialogDescription className="pt-2 text-sm sm:text-base">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-2 sm:py-4">
          <div className="overflow-hidden relative rounded-lg aspect-video">
            <Image
              src="/assets/images/example.jpg"
              alt="Nature photograph"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute right-0 bottom-0 left-0 p-2 sm:p-4">
              <h3 className="text-sm font-medium text-white sm:text-base line-clamp-1">
                Nature Photograph
              </h3>
            </div>
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="h-8 text-xs sm:text-sm sm:h-10"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            className="h-8 text-xs sm:text-sm sm:h-10"
          >
            Delete Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostDialog;
