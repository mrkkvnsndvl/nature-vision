import AccountForm from "@/app/(root)/settings/components/shared/account-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <ScrollArea className="h-[calc(100svh_-_298px)] lg:h-[calc(100svh_-_245px)] xl:h-[calc(100svh_-_180px)]">
      <div className="p-4 pb-10 space-y-6 sm:pb-4">
        <div>
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Update your account settings and manage your email preferences.
          </p>
        </div>
        <Separator />
        <AccountForm />
      </div>
    </ScrollArea>
  );
};

export default SettingsPage;
