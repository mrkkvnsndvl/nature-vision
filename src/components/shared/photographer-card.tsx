import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const PhotographerCard = () => {
  return (
    <div className="flex justify-between items-center p-2 rounded-lg transition-colors group hover:bg-accent/50">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center space-x-3 cursor-pointer">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Maria Santos Cruz"
              />
              <AvatarFallback>MSC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none group-hover:text-primary">
                Maria Santos Cruz
              </p>
              <p className="text-sm text-muted-foreground">10 followers</p>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MSC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Maria Santos Cruz</h4>
              <p className="text-sm text-muted-foreground">@mariascruz</p>
              <p className="text-sm">
                Nature photographer with a passion for capturing the beauty of
                nature.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Button variant="default" size="sm" className="transition-all">
        Follow
      </Button>
    </div>
  );
};

export default PhotographerCard;
