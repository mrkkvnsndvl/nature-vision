import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  CompassIcon,
  LeafIcon,
  MountainIcon,
  MountainSnowIcon,
  PawPrintIcon,
  WavesIcon,
} from "lucide-react";

const CategoryQuickFilters = () => {
  return (
    <ScrollArea className="mx-auto w-full whitespace-nowrap">
      <div className="flex gap-x-2 items-center p-4">
        <Button
          variant="outline"
          className="flex gap-2 items-center whitespace-nowrap"
        >
          <CompassIcon className="w-4 h-4" />
          Adventure
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 items-center whitespace-nowrap"
        >
          <MountainIcon className="w-4 h-4" />
          Landscapes
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 items-center whitespace-nowrap"
        >
          <MountainSnowIcon className="w-4 h-4" />
          Nature
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 items-center whitespace-nowrap"
        >
          <LeafIcon className="w-4 h-4" />
          Plants
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 items-center whitespace-nowrap"
        >
          <WavesIcon className="w-4 h-4" />
          Underwater
        </Button>
        <Button
          variant="outline"
          className="flex gap-2 items-center whitespace-nowrap"
        >
          <PawPrintIcon className="w-4 h-4" />
          Wildlife
        </Button>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CategoryQuickFilters;
