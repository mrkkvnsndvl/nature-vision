import SettingsSidebar from "@/app/(root)/settings/components/shared/settings-sidebar";
import { Separator } from "@/components/ui/separator";

export const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex flex-col h-full">
        <div className="py-6">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </div>
        <Separator />
        <div className="pt-4 h-full">
          <div className="flex flex-col h-full lg:flex-row">
            <aside className="lg:mx-0 lg:px-0 lg:w-1/5">
              <SettingsSidebar />
            </aside>
            <Separator className="lg:hidden" />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
