"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Appearance = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Theme</h4>
            <p className="text-sm text-muted-foreground">
              Select your preferred theme for Nature Vision.
            </p>
          </div>
          <Separator />
          <div className="space-y-1">
            <RadioGroup className="grid grid-cols-3 gap-8 pt-2 max-w-md">
              <div>
                <RadioGroupItem value="light" className="sr-only peer" />
                <label className="[&:has([data-state=checked])>div]:border-primary">
                  <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                    <SunIcon className="mb-3 w-6 h-6" />
                    <span className="text-sm font-medium text-center">Light</span>
                  </div>
                </label>
              </div>
              <div>
                <RadioGroupItem value="dark" className="sr-only peer" />
                <label className="[&:has([data-state=checked])>div]:border-primary">
                  <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                    <MoonIcon className="mb-3 w-6 h-6" />
                    <span className="text-sm font-medium text-center">Dark</span>
                  </div>
                </label>
              </div>
              <div>
                <RadioGroupItem value="system" className="sr-only peer" />
                <label className="[&:has([data-state=checked])>div]:border-primary">
                  <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                    <MonitorIcon className="mb-3 w-6 h-6" />
                    <span className="text-sm font-medium text-center">System</span>
                  </div>
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium">Theme</h4>
          <p className="text-sm text-muted-foreground">
            Select your preferred theme for Nature Vision.
          </p>
        </div>
        <Separator />
        <div className="space-y-1">
          <RadioGroup className="grid grid-cols-3 gap-8 pt-2 max-w-md">
            <div>
              <RadioGroupItem value="light" className="sr-only peer" />
              <label className="[&:has([data-state=checked])>div]:border-primary">
                <div
                  onClick={() => setTheme("light")}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <SunIcon className={`mb-3 w-6 h-6 ${mounted && theme === "light" ? "text-green-500" : ""}`} />
                  <span className={`text-sm font-medium text-center ${mounted && theme === "light" ? "text-green-500" : ""}`}>Light</span>
                </div>
              </label>
            </div>
            <div>
              <RadioGroupItem value="dark" className="sr-only peer" />
              <label className="[&:has([data-state=checked])>div]:border-primary">
                <div
                  onClick={() => setTheme("dark")}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <MoonIcon className={`mb-3 w-6 h-6 ${mounted && theme === "dark" ? "text-green-500" : ""}`} />
                  <span className={`text-sm font-medium text-center ${mounted && theme === "dark" ? "text-green-500" : ""}`}>Dark</span>
                </div>
              </label>
            </div>
            <div>
              <RadioGroupItem value="system" className="sr-only peer" />
              <label className="[&:has([data-state=checked])>div]:border-primary">
                <div
                  onClick={() => setTheme("system")}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <MonitorIcon className={`mb-3 w-6 h-6 ${mounted && theme === "system" ? "text-green-500" : ""}`} />
                  <span className={`text-sm font-medium text-center ${mounted && theme === "system" ? "text-green-500" : ""}`}>
                    System
                  </span>
                </div>
              </label>
            </div>
          </RadioGroup>
          <p className="text-sm text-muted-foreground pt-2">
            Select a theme for your Nature Vision experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Appearance;
