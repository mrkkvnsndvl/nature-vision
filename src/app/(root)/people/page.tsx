"use client";

import UserCard from "@/app/(root)/people/components/shared/user-card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CompassIcon,
  LeafIcon,
  MountainIcon,
  MountainSnowIcon,
  PawPrintIcon,
  SearchIcon,
  UsersIcon,
  WavesIcon,
} from "lucide-react";

const PeoplePage = () => {
  return (
    <section>
      <div className="pt-4 mx-auto xl:p-4">
        <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 w-4 h-4 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              id="search"
              name="search"
              placeholder="Search for photographers, enthusiasts, or categories..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger
                id="category-select"
                name="category-select"
                className="md:w-[180px]"
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adventure">
                  <div className="flex gap-2 justify-start items-center">
                    <CompassIcon className="w-4 h-4" />
                    <span>Adventure</span>
                  </div>
                </SelectItem>
                <SelectItem value="landscape">
                  <div className="flex gap-2 justify-start items-center">
                    <MountainIcon className="w-4 h-4" />
                    <span>Landscapes</span>
                  </div>
                </SelectItem>
                <SelectItem value="nature">
                  <div className="flex gap-2 justify-start items-center">
                    <MountainSnowIcon className="w-4 h-4" />
                    <span>Nature</span>
                  </div>
                </SelectItem>
                <SelectItem value="plant">
                  <div className="flex gap-2 justify-start items-center">
                    <LeafIcon className="w-4 h-4" />
                    <span>Plants</span>
                  </div>
                </SelectItem>
                <SelectItem value="underwater">
                  <div className="flex gap-2 justify-start items-center">
                    <WavesIcon className="w-4 h-4" />
                    <span>Underwater</span>
                  </div>
                </SelectItem>
                <SelectItem value="wildlife">
                  <div className="flex gap-2 justify-start items-center">
                    <PawPrintIcon className="w-4 h-4" />
                    <span>Wildlife</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ScrollArea className="h-[calc(100svh_-_257px)] md:h-[calc(100svh_-_202px)] xl:h-[calc(100svh_-_153px)] pr-4">
          <div className="grid gap-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
            <UserCard />
          </div>
          <div className="pb-4 mt-8">
            <div className="flex items-center mb-4 space-x-2">
              <UsersIcon className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Recommended for You</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <UserCard />
            </div>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default PeoplePage;
