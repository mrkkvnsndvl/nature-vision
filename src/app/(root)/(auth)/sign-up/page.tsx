"use client";

import SignUpForm from "@/app/(root)/(auth)/sign-up/components/shared/sign-up-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignUpPage = () => {
  return (
    <div className="container flex justify-center items-center py-4 mx-auto">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create Your Account
          </CardTitle>
          <CardDescription>
            Join our vibrant community of nature photographers and enthusiasts.
            Share, explore, and connect!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
