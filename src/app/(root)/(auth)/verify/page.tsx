"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2Icon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [isResending, setIsResending] = useState(false);

  const handleResendVerification = async () => {
    setIsResending(true);
    // TODO: Implement resend verification logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsResending(false);
  };

  return (
    <div className="container flex justify-center items-center mx-auto">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="p-6 rounded-full bg-primary/10">
              <MailIcon className="w-12 h-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-center">
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-center">
            We&apos;ve sent a verification link to{" "}
            <span className="font-medium text-primary">{email}</span>. Please
            check your email and click the link to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            <p>
              Didn&apos;t receive the email? Check your spam folder or{" "}
              <Button
                variant="link"
                className="p-0 h-auto font-normal"
                onClick={handleResendVerification}
                disabled={isResending}
              >
                {isResending && (
                  <Loader2Icon className="mr-2 w-4 h-4 animate-spin" />
                )}
                click here to resend
              </Button>
              .
            </p>
          </div>
          <div className="text-sm text-center">
            <Link href="/sign-in" className="text-primary hover:underline">
              Back to Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyPage;
