import AppearanceForm from "@/app/(root)/settings/components/shared/appearance";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const AppearanceSettingsPage = () => {
  return (
    <ScrollArea className="h-[calc(100svh_-_322px)] xl:h-[calc(100svh_-_188px)]">
      <div className="p-4 space-y-6">
        <div>
          <h3 className="text-lg font-medium">Appearance Settings</h3>
          <p className="text-sm text-muted-foreground">
            Customize how Nature Vision looks on your device.
          </p>
        </div>
        <Separator />
        <AppearanceForm />
      </div>
    </ScrollArea>
  );
};

export default AppearanceSettingsPage;
