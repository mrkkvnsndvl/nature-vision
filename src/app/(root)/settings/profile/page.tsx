import ProfileForm from "@/app/(root)/settings/components/shared/profile-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const ProfileSettingsPage = () => {
  return (
    <ScrollArea className="h-[calc(100svh_-_298px)] lg:h-[calc(100svh_-_245px)] xl:h-[calc(100svh_-_180px)]">
      <div className="p-4 pb-10 space-y-6 sm:pb-4">
        <div>
          <h3 className="text-lg font-medium">Profile Settings</h3>
          <p className="text-sm text-muted-foreground">
            Update your profile information and customize how others see you.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </ScrollArea>
  );
};

export default ProfileSettingsPage;
