"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { profileFormSchema } from "@/lib/validator";
import { IProfileForm } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CameraIcon, Loader2 } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues: Partial<IProfileForm> = {
  username: "johnnaturalist",
  name: "John Naturalist",
  bio: "Nature enthusiast & wildlife photographer",
  profileImage: undefined,
  bannerImage: undefined,
};

const ProfileForm = () => {
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isBannerUploading, setIsBannerUploading] = useState(false);

  const form = useForm<IProfileForm>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: IProfileForm) => {
    console.log(data);
  };

  const handleProfileImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsUploading(true);
      const file = e.target.files?.[0];
      if (file) {
        form.setValue("profileImage", file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      setIsUploading(false);
    },
    [form]
  );

  const handleBannerImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsBannerUploading(true);
      const file = e.target.files?.[0];
      if (file) {
        form.setValue("bannerImage", file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setBannerPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      setIsBannerUploading(false);
    },
    [form]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Profile Picture</h4>
            <p className="text-sm text-muted-foreground">
              Your profile picture will be shown on your profile and in your
              posts.
            </p>
          </div>
          <Separator />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-4 items-center">
                    <div className="relative">
                      <Image
                        src={profilePreview || "https://github.com/shadcn.png"}
                        alt="Profile picture"
                        width={96}
                        height={96}
                        className="object-cover rounded-full"
                        priority
                      />
                      <div className="relative">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full"
                          disabled={isUploading}
                        >
                          {isUploading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <CameraIcon className="w-4 h-4" />
                          )}
                        </Button>
                        <Input
                          type="file"
                          accept="image/jpeg,image/jpg,image/png"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleProfileImageUpload}
                          disabled={isUploading}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">
                        Upload a new photo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        JPG or PNG. Max size of 4MB.
                      </p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Profile Banner</h4>
            <p className="text-sm text-muted-foreground">
              This will be displayed at the top of your profile page.
            </p>
          </div>
          <Separator />
          <FormField
            control={form.control}
            name="bannerImage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-4">
                    <div className="relative aspect-[3/1] overflow-hidden rounded-lg border bg-muted">
                      <Image
                        src={bannerPreview || "/assets/images/example.jpg"}
                        alt="Profile banner"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="relative">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="absolute right-4 bottom-4 w-8 h-8"
                          disabled={isBannerUploading}
                        >
                          {isBannerUploading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <CameraIcon className="w-4 h-4" />
                          )}
                        </Button>
                        <Input
                          type="file"
                          accept="image/jpeg,image/jpg,image/png"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleBannerImageUpload}
                          disabled={isBannerUploading}
                        />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Recommended size: 1500x500. JPG or PNG. Max size of 4MB.
                    </p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Profile Information</h4>
            <p className="text-sm text-muted-foreground">
              Update your profile information.
            </p>
          </div>
          <Separator />
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johnnaturalist"
                      autoComplete="on"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can only contain
                    letters, numbers, and underscores.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Naturalist"
                      autoComplete="on"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your full name, it will be displayed on your
                    profile.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Write a short bio about yourself. This will be displayed on
                    your profile. {field.value?.length || 0}/160 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
