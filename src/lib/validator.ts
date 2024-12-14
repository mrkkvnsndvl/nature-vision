import * as z from "zod";

// Common validation constants
const MAX_IMAGE_SIZE = 4000000; // 4MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;

// Common validation messages
const IMAGE_VALIDATION_MESSAGES = {
  size: "Image must be less than 4MB.",
  type: "Only .jpg, .jpeg and .png formats are supported.",
};

// Authentication Schemas
export const signUpFormSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_IMAGE_SIZE, {
      message: IMAGE_VALIDATION_MESSAGES.size,
    })
    .refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), {
      message: IMAGE_VALIDATION_MESSAGES.type,
    })
    .optional(),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .regex(USERNAME_REGEX, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(PASSWORD_REGEX, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
    }),
});

export const signInFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

// Post Management Schemas
export const createPostSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_IMAGE_SIZE, {
      message: IMAGE_VALIDATION_MESSAGES.size,
    })
    .refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), {
      message: IMAGE_VALIDATION_MESSAGES.type,
    }),
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000, { message: "Description must not exceed 1000 characters" }),
  tags: z
    .array(z.string())
    .min(1, { message: "Add at least one tag" })
    .max(10, { message: "Cannot add more than 10 tags" }),
  category: z.string({ required_error: "Please select a category" }),
  privacy: z.string({ required_error: "Please select privacy settings" }),
});

// User Profile and Settings Schemas
export const accountFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(PASSWORD_REGEX, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const profileFormSchema = z.object({
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_IMAGE_SIZE, {
      message: IMAGE_VALIDATION_MESSAGES.size,
    })
    .refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), {
      message: IMAGE_VALIDATION_MESSAGES.type,
    })
    .optional(),
  bannerImage: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_IMAGE_SIZE, {
      message: IMAGE_VALIDATION_MESSAGES.size,
    })
    .refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), {
      message: IMAGE_VALIDATION_MESSAGES.type,
    })
    .optional(),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(30, { message: "Username must not be longer than 30 characters" })
    .regex(USERNAME_REGEX, {
      message: "Username can only include letters, numbers, and underscores",
    }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must not be longer than 50 characters" }),
  bio: z
    .string()
    .max(160, { message: "Bio must not be longer than 160 characters" })
    .optional(),
});

export const privacyFormSchema = z.object({
  visibility: z.enum(["everyone", "followers", "private"], {
    required_error: "Please select a visibility option.",
  }),
});

export const notificationsFormSchema = z.object({
  likes: z.boolean().default(true),
  follows: z.boolean().default(true),
  emails: z.boolean().default(false),
  dndStart: z.date().optional(),
  dndEnd: z.date().optional(),
});

export const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Please select a theme.",
  }),
});
