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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPostSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Edit2Icon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type EditPostValues = z.infer<typeof createPostSchema>;

const EditPostDialog = () => {
  const [tagInput, setTagInput] = useState("");

  const form = useForm<EditPostValues>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
  });

  const { tags } = form.watch();

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = tagInput.trim().replace(/^#/, "");
      if (tag && !tags.includes(tag)) {
        form.setValue("tags", [...tags, tag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    form.setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const onSubmit = async (data: EditPostValues) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-[12px] md:text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full hover:bg-accent hover:text-accent-foreground">
        <Edit2Icon className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
        Edit Post
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl lg:max-w-3xl p-4 sm:p-6 h-svh sm:h-auto overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl">Edit Post</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Make changes to your post. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-8"
          >
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="overflow-hidden relative rounded-lg aspect-square">
                  <Image
                    src="/assets/images/example.jpg"
                    alt="Nature photograph"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Title
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter post title"
                            {...field}
                            className="h-8 text-sm sm:text-base sm:h-10"
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm sm:text-base">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your nature adventure..."
                            className="resize-none text-sm sm:text-base min-h-[80px] sm:min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2 sm:space-y-4">
                    <FormLabel className="text-sm sm:text-base">Tags</FormLabel>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1 bg-secondary text-secondary-foreground px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md"
                        >
                          <span className="text-xs sm:text-sm">#{tag}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="w-3 h-3 sm:h-4 sm:w-4 text-muted-foreground hover:text-foreground"
                            onClick={() => removeTag(tag)}
                          >
                            <XIcon className="w-2 h-2 sm:h-3 sm:w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Input
                      placeholder="Add tags (press Enter or comma to add)"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagInput}
                      className="h-8 text-sm sm:text-base sm:h-10"
                    />
                  </div>
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
              <Button type="submit" className="h-8 text-xs sm:text-sm sm:h-10">
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostDialog;
