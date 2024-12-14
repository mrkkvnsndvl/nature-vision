"use client";

import ForgotPasswordForm from "@/app/(root)/(auth)/forgot-password/components/shared/forgot-password-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ForgotPasswordPage = () => {
  return (
    <div className="container flex justify-center items-center py-4 mx-auto">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Reset Your Password
          </CardTitle>
          <CardDescription>
            Enter your email address and we'll send you instructions to reset
            your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
