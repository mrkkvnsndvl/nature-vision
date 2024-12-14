"use client";

import DeletePostDialog from "@/app/(root)/profile/components/shared/delete-post-dialog";
import EditPostDialog from "@/app/(root)/profile/components/shared/edit-post-dialog";
import FollowersDialog from "@/app/(root)/profile/components/shared/followers-dialog";
import FollowingDialog from "@/app/(root)/profile/components/shared/following-dialog";
import ViewPostDialog from "@/app/(root)/profile/components/shared/view-post-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookmarkIcon,
  CalendarIcon,
  HeartIcon,
  Image as ImageIcon,
  MoreVerticalIcon,
} from "lucide-react";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <section className="h-[calc(100svh_-_120px)] xl:h-[calc(100svh_-_57px)]">
      <ScrollArea className="h-full">
        <div className="relative pr-4">
          <div className="relative w-full h-28 sm:h-48 md:h-72">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
            <Image
              src="/assets/images/example.jpg"
              alt="Profile banner"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="w-full px-0.5 sm:px-4 pb-4">
            <div className="relative -mt-10 mb-2 sm:-mt-20 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 sm:gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-1.5 sm:gap-6">
                  <div className="relative">
                    <Image
                      src="https://github.com/shadcn.png"
                      alt="Maria Santos Cruz"
                      width={60}
                      height={60}
                      className="rounded-full border-2 sm:border-4 border-background shadow-xl sm:w-[140px] sm:h-[140px]"
                      priority
                    />
                  </div>
                  <div>
                    <h1 className="text-base font-bold sm:text-2xl md:text-3xl">
                      Maria Santos Cruz
                    </h1>
                    <p className="text-[10px] sm:text-base md:text-md text-muted-foreground">
                      Nature enthusiast and photographer
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full h-7 text-xs shadow-sm sm:w-auto sm:h-10 sm:text-sm"
                >
                  Follow
                </Button>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-6">
              <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-muted-foreground">
                <CalendarIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                <span>Joined January 2024</span>
              </div>
              <div className="flex gap-2 justify-between sm:gap-8 sm:justify-start">
                <div className="flex items-center gap-0.5 sm:gap-2 hover:text-foreground transition-colors cursor-pointer">
                  <ImageIcon className="w-2.5 h-2.5 sm:w-5 sm:h-5" />
                  <span className="text-xs font-semibold sm:text-lg">1</span>
                  <span className="text-muted-foreground text-[10px] sm:text-base">
                    post
                  </span>
                </div>
                <FollowersDialog />
                <FollowingDialog />
              </div>
            </div>
            <Tabs defaultValue="gallery" className="mt-2 sm:mt-8">
              <TabsList className="w-full justify-start h-7 sm:h-12 p-0.5 sm:p-1">
                <TabsTrigger
                  value="gallery"
                  className="flex items-center gap-0.5 sm:gap-2 px-1.5 sm:px-6 text-[10px] sm:text-base"
                >
                  <ImageIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                  Gallery
                </TabsTrigger>
                <TabsTrigger
                  value="saved"
                  className="flex items-center gap-0.5 sm:gap-2 px-1.5 sm:px-6 text-[10px] sm:text-base"
                >
                  <BookmarkIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                  Saved
                </TabsTrigger>
              </TabsList>
              <TabsContent value="gallery" className="mt-1.5 sm:mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-0.5 sm:gap-4 md:gap-6">
                  <Card className="overflow-hidden relative border-none shadow-sm group sm:shadow-lg">
                    <div className="relative cursor-pointer aspect-square">
                      <Image
                        src="/assets/images/example.jpg"
                        alt="Majestic Mountain Sunrise"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity from-black/60 group-hover:opacity-100" />
                      <div className="absolute right-0 bottom-0 left-0 p-1 text-white opacity-0 transition-all transform translate-y-4 sm:p-4 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="font-medium text-[10px] sm:text-base line-clamp-1">
                          Majestic Mountain Sunrise
                        </h3>
                        <div className="flex gap-1.5 sm:gap-4 mt-0.5 sm:mt-2 text-[10px] sm:text-sm">
                          <div className="flex items-center gap-0.5 sm:gap-1">
                            <HeartIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                            1.2k
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-0.5 right-0.5 sm:top-2 sm:right-2 h-5 w-5 sm:h-8 sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 text-white"
                          >
                            <MoreVerticalIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="w-[120px] sm:w-[160px]"
                        >
                          <ViewPostDialog />
                          <EditPostDialog />
                          <DeletePostDialog />
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="saved" className="mt-1.5 sm:mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-0.5 sm:gap-4 md:gap-6">
                  <Card className="overflow-hidden relative border-none shadow-sm group sm:shadow-lg">
                    <div className="relative cursor-pointer aspect-square">
                      <Image
                        src="/assets/images/example.jpg"
                        alt="Majestic Mountain Sunrise"
                        fill
                        priority
                        className="object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity from-black/60 group-hover:opacity-100" />
                      <div className="absolute right-0 bottom-0 left-0 p-1 text-white opacity-0 transition-all transform translate-y-4 sm:p-4 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="font-medium text-[10px] sm:text-base line-clamp-1">
                          Majestic Mountain Sunrise
                        </h3>
                        <div className="flex gap-1.5 sm:gap-4 mt-0.5 sm:mt-2 text-[10px] sm:text-sm">
                          <div className="flex items-center gap-0.5 sm:gap-1">
                            <HeartIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />{" "}
                            1.2k
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-0.5 right-0.5 sm:top-2 sm:right-2 h-5 w-5 sm:h-8 sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 text-white"
                      >
                        <BookmarkIcon className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-current" />
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
};

export default ProfilePage;
