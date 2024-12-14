import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

const UserCard = () => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-start space-x-4">
              <Avatar className="w-12 h-12 border-2 border-primary/10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Maria Santos Cruz"
                />
                <AvatarFallback>MSC</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium leading-none hover:text-primary">
                      Maria Santos Cruz
                    </h3>
                    <p className="text-sm text-muted-foreground">@mariascruz</p>
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    className="transition-all"
                  >
                    Follow
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Nature photographer with a passion for capturing the beauty of
                  the natural world.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                    Nature
                  </span>
                </div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MSC</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-semibold">Maria Santos Cruz</h4>
                  <p className="text-sm text-muted-foreground">@mariascruz</p>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Followers</p>
                  <p className="font-medium">10</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Posts</p>
                  <p className="font-medium">1</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-1">
                <p className="text-sm font-medium">Featured Categories</p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                    Nature
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  );
};

export default UserCard;
