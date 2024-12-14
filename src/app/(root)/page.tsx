import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookmarkIcon, HeartIcon } from "lucide-react";

const HomePage = () => {
  return (
    <section>
      <ScrollArea className="h-[calc(100svh_-_121px)] xl:h-[calc(100svh_-_57px)]">
        <div className="flex flex-col gap-y-4 p-4">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MSC</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-tight">
                      Maria Santos Cruz
                    </p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-shrink-0"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img
                src="/assets/images/example.jpg"
                alt="Majestic Mountain Sunrise"
                height="500"
                width="800"
                className="object-cover w-full aspect-video"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4 space-y-4">
              <div>
                <h3 className="font-bold">Majestic Mountain Sunrise</h3>
                <p className="text-sm text-muted-foreground">
                  Captured this breathtaking view of Mt. Pulag during the golden
                  hour. The sea of clouds was absolutely stunning!
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm">
                  #nature
                </Button>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="w-4 h-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <span className="text-sm font-medium">1.2k</span>
                </div>
                <Button variant="ghost" size="icon">
                  <BookmarkIcon className="w-4 h-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </ScrollArea>
    </section>
  );
};

export default HomePage;
