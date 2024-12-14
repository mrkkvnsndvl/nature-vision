import {
  BellIcon,
  BinocularsIcon,
  CompassIcon,
  Globe2Icon,
  HomeIcon,
  ImagePlusIcon,
  LeafIcon,
  LockIcon,
  LucideProps,
  MountainIcon,
  MountainSnowIcon,
  PaletteIcon,
  PawPrintIcon,
  UsersIcon,
  WavesIcon,
} from "lucide-react";
import { ComponentType } from "react";

type HeaderLink = {
  label: string;
  icon: ComponentType<LucideProps>;
  href: string;
};

export const headerLinks: HeaderLink[] = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Explore",
    icon: BinocularsIcon,
    href: "/explore",
  },
  {
    label: "People",
    icon: UsersIcon,
    href: "/people",
  },
  {
    label: "Create Post",
    icon: ImagePlusIcon,
    href: "/create-post",
  },
];

type BottomNavLink = {
  label: string;
  icon: ComponentType<LucideProps>;
  href: string;
};

export const bottomNavLinks: BottomNavLink[] = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Explore",
    icon: BinocularsIcon,
    href: "/explore",
  },
  {
    label: "People",
    icon: UsersIcon,
    href: "/people",
  },
  {
    label: "Create Post",
    icon: ImagePlusIcon,
    href: "/create-post",
  },
];

type Category = {
  id: string;
  label: string;
  icon: ComponentType<LucideProps>;
};

export const categories: Category[] = [
  { id: "adventure", label: "Adventure", icon: CompassIcon },
  { id: "landscapes", label: "Landscapes", icon: MountainIcon },
  { id: "nature", label: "Nature", icon: MountainSnowIcon },
  { id: "plants", label: "Plants", icon: LeafIcon },
  { id: "underwater", label: "Underwater", icon: WavesIcon },
  { id: "wildlife", label: "Wildlife", icon: PawPrintIcon },
];

type PrivacyOption = {
  id: string;
  label: string;
  icon: ComponentType<LucideProps>;
  description: string;
};

export const privacyOptions: PrivacyOption[] = [
  {
    id: "public",
    label: "Public",
    icon: Globe2Icon,
    description: "Visible to everyone",
  },
  {
    id: "followers",
    label: "Followers Only",
    icon: UsersIcon,
    description: "Visible to followers",
  },
  {
    id: "private",
    label: "Private",
    icon: LockIcon,
    description: "Visible only to you",
  },
];

type SidebarNavItem = {
  title: string;
  href: string;
  icon: ComponentType<LucideProps>;
};

export const sidebarNavItems: SidebarNavItem[] = [
  {
    title: "Account",
    href: "/settings",
    icon: UsersIcon,
  },
  {
    title: "Profile",
    href: "/settings/profile",
    icon: UsersIcon,
  },
  {
    title: "Privacy",
    href: "/settings/privacy",
    icon: LockIcon,
  },
  {
    title: "Notifications",
    href: "/settings/notifications",
    icon: BellIcon,
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
    icon: PaletteIcon,
  },
];
