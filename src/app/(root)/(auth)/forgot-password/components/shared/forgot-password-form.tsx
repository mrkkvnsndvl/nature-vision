import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { forgotPasswordSchema } from "@/lib/validator";
import { IForgotPasswordForm } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const defaultValues: Partial<IForgotPasswordForm> = {
  email: "",
};

const ForgotPasswordForm = () => {
  const form = useForm<IForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues,
  });

  function onSubmit(data: IForgotPasswordForm) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send Reset Instructions
        </Button>
        <div className="text-sm text-center">
          Remember your password?{" "}
          <Link href="/sign-in" className="text-primary hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
