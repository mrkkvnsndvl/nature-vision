import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories, privacyOptions } from "@/constants";
import { createPostSchema } from "@/lib/validator";
import { ICreatePostForm } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, Upload, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues: Partial<ICreatePostForm> = {
  title: "",
  description: "",
  category: undefined,
  privacy: "public",
  tags: [],
  image: undefined,
};

const CreatePostForm = () => {
  const [tagInput, setTagInput] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const form = useForm<ICreatePostForm>({
    resolver: zodResolver(createPostSchema),
    defaultValues,
  });

  function onSubmit(data: ICreatePostForm) {
    console.log(data);
  }

  const { tags } = form.watch();

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = tagInput.trim().replace(/^#/, "");
      if (tag && !tags.includes(tag)) {
        form.setValue("tags", [...tags, tag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    form.setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      form.setValue("image", e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      form.setValue("image", e.target.files[0]);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl">Upload Photo</CardTitle>
          <CardDescription>
            Share your best nature photograph with the community
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 space-y-4 sm:space-y-6 sm:p-6">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div
                    className={`relative flex flex-col items-center justify-center p-4 sm:p-12 text-center border-2 border-dashed rounded-lg transition-colors ${
                      dragActive
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/25"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <ImageIcon className="mb-2 w-8 h-8 sm:w-12 sm:h-12 sm:mb-4 text-muted-foreground" />
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-xs font-medium sm:text-sm">
                        Drag and drop your nature photo here
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG, JPEG up to 4MB
                      </p>
                    </div>
                    <div className="relative mt-2 sm:mt-4">
                      <Button size="sm" className="text-xs sm:text-sm">
                        <Upload className="mr-1 w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                        Select Photo
                      </Button>
                      <input
                        type="file"
                        id="image-upload"
                        name="image-upload"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleFileSelect}
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-3 sm:space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <FormControl>
                    <Input
                      id="title"
                      placeholder="Title your post (e.g., Sunset in the Mountains)"
                      className="text-sm sm:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      id="description"
                      placeholder="Describe your location, experience, or inspiration..."
                      className="h-24 text-sm sm:h-32 sm:text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="tags">Tags</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1.5 sm:p-2 border rounded-md min-h-[42px]">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="gap-1 text-xs sm:text-sm py-0.5"
                      >
                        #{tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="w-3 h-3 rounded-full sm:w-4 sm:h-4 hover:bg-primary/20"
                        >
                          <X className="w-2 h-2 sm:w-3 sm:h-3" />
                        </button>
                      </Badge>
                    ))}
                    <Input
                      id="tags"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagInput}
                      placeholder="Add tags (press Enter)"
                      className="flex-1 border-0 focus-visible:ring-0 text-sm sm:text-base h-6 sm:h-8 min-w-[100px]"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        <div className="flex gap-2 items-center">
                          <category.icon className="w-4 h-4" />
                          <span>{category.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="privacy">Privacy</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger id="privacy">
                      <SelectValue placeholder="Select privacy setting" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {privacyOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        <div className="flex gap-2 items-center">
                          <option.icon className="w-4 h-4" />
                          <div className="flex flex-col">
                            <span>{option.label}</span>
                            <span className="text-xs text-muted-foreground">
                              {option.description}
                            </span>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="p-4 sm:p-6">
          <Button type="submit" className="w-full">
            Create Post
          </Button>
        </CardFooter>
      </form>
    </Form>
  );
};

export default CreatePostForm;
