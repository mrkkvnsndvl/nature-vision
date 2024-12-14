import NotificationsForm from "@/app/(root)/settings/components/shared/notifications-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const NotificationsSettingsPage = () => {
  return (
    <ScrollArea className="h-[calc(100svh_-_298px)] lg:h-[calc(100svh_-_245px)] xl:h-[calc(100svh_-_180px)]">
      <div className="p-4 pb-10 space-y-6 sm:pb-4">
        <div>
          <h3 className="text-lg font-medium">Notification Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you want to receive notifications.
          </p>
        </div>
        <Separator />
        <NotificationsForm />
      </div>
    </ScrollArea>
  );
};

export default NotificationsSettingsPage;
