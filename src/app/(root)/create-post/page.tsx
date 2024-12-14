"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import CreatePostForm from "./components/shared/create-post-form";

const CreatePostPage = () => {
  return (
    <section className="h-[calc(100svh_-_120px)] xl:h-[calc(100svh_-_57px)]">
      <ScrollArea className="h-full">
        <div className="flex justify-center items-start">
          <div className="p-4 w-full max-w-3xl">
            <div className="mb-6 text-center sm:mb-8">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Share Your Nature Adventure
              </h1>
              <p className="px-2 mt-2 text-sm sm:text-base text-muted-foreground">
                Inspire the community with your unique perspective of nature
              </p>
            </div>
            <Card className="overflow-hidden">
              <CreatePostForm />
            </Card>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
};

export default CreatePostPage;
