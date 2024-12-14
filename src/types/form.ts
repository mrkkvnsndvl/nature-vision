export interface ISignUpForm {
  profileimage?: File;
  fullName: string;
  username: string;
  email: string;
  password: string;
}

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IForgotPasswordForm {
  email: string;
}

export interface ICreatePostForm {
  image: File;
  title: string;
  description: string;
  tags: string[];
  category: "landscapes" | "wildlife" | "plants" | "adventure";
  privacy: "public" | "followers" | "private";
}

export interface IEditPostForm extends Omit<ICreatePostForm, "image"> {
  image?: File;
}

export interface IAccountForm {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IProfileForm {
  profileImage?: File;
  bannerImage?: File;
  username: string;
  name: string;
  bio?: string;
}

export interface IPrivacyForm {
  visibility: "everyone" | "followers" | "private";
}

export interface INotificationsForm {
  likes: boolean;
  follows: boolean;
  emails: boolean;
  dndStart?: Date;
  dndEnd?: Date;
}

export interface IAppearanceForm {
  theme: "light" | "dark" | "system";
}
