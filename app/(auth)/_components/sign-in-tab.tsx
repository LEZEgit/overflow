"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { useRouter } from "next/navigation";
import { clearFlashToast, setFlashToast } from "@/lib/toast";
import ROUTES from "@/constants/routes";
import { signInSchema } from "@/lib/validations";


type SignInForm = z.infer<typeof signInSchema>;

export function SignInTab() {
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  async function handleSignIn(data: SignInForm) {
    toast.info("Signing in...", {
      style: {
        "--border-radius": "calc(var(--radius)  + 8px)",
      } as React.CSSProperties,
      duration: 2000,
    });

    setFlashToast({ toastType: "success", message: "Welcome!", description: "Successfully authenticated" });
    await authClient.signIn.email(
      {
        ...data,
        callbackURL: ROUTES.HOME,
      },
      {
        onError: (error) => {
          clearFlashToast();
          toast.error(`Error: ${error.error.message}`);
          router.refresh();
        },
      }
    );
  }

  const { isSubmitting } = form.formState;

  return (
    <form id="signin-form" onSubmit={form.handleSubmit(handleSignIn)}>
      <FieldGroup className="flex gap-4">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="flex gap-1">
              <FieldLabel htmlFor="signup-form-email">Email</FieldLabel>
              <Input
                {...field}
                id="signup-form-email"
                aria-invalid={fieldState.invalid}
                placeholder="shuklajohn23@vemail.com"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="flex gap-1" >
              <FieldLabel htmlFor="signup-form-password">
                Password
                <span className="text-muted-foreground text-xs">(must be atleast 6 characters)</span>
              </FieldLabel>
              <PasswordInput
                {...field}
                id="signup-form-password"
                aria-invalid={fieldState.invalid}
                placeholder="password"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" size="lg" disabled={isSubmitting} className="primary-gradient paragraph-medium min-h-12 rounded-2 font-inter text-light-900! mt-6 w-full">
        <LoadingSwap isLoading={isSubmitting}>Sign In</LoadingSwap>
      </Button>
    </form>
  );
}
