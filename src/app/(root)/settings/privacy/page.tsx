import PrivacyForm from "@/app/(root)/settings/components/shared/privacy-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const PrivacySettingsPage = () => {
  return (
    <ScrollArea className="h-[calc(100svh_-_298px)] lg:h-[calc(100svh_-_245px)] xl:h-[calc(100svh_-_188px)]">
      <div className="p-4 pb-10 space-y-6 sm:pb-4">
        <div>
          <h3 className="text-lg font-medium">Privacy Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your privacy preferences and control who can see your
            content.
          </p>
        </div>
        <Separator />
        <PrivacyForm />
      </div>
    </ScrollArea>
  );
};

export default PrivacySettingsPage;
