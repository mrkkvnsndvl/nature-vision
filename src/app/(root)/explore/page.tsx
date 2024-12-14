import CategoryQuickFilters from "@/components/shared/category-quick-filters";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookmarkIcon, HeartIcon } from "lucide-react";
import Image from "next/image";

const ExplorePage = () => {
  return (
    <section className="h-[calc(100svh_-_193px)] xl:h-[calc(100svh_-_129px)]">
      <CategoryQuickFilters />
      <ScrollArea className="h-full">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden cursor-pointer group">
            <CardContent className="relative p-0">
              <Image
                src="/assets/images/example.jpg"
                alt="Nature photograph"
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform group-hover:scale-105 aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity from-black/60 group-hover:opacity-100" />
              <div className="absolute right-0 bottom-0 left-0 p-4 text-white transition-transform transform translate-y-full group-hover:translate-y-0">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Photographer 1</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button className="flex gap-1 items-center transition-colors hover:text-red-600">
                      <HeartIcon className="w-4 h-4" />
                    </button>
                    <button className="flex gap-1 items-center transition-colors hover:text-green-600">
                      <BookmarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </section>
  );
};

export default ExplorePage;
