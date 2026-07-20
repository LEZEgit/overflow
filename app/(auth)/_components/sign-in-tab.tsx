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

const signInSchema = z.object({
  email: z.email().min(1, "Email can't be empty."),
  password: z.string().min(6, "Password is too short."),
});

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
    try {
      setFlashToast({ toastType: "success", message: "Welcome!", description: "Successfully authenticated" });
      await authClient.signIn.email({
      ...data,
      callbackURL: ROUTES.HOME,
    });
    } catch (err) {
      clearFlashToast();
      toast.error(`Error while authenticating.`, {
        position: "top-right",
      });
      const errorMessage = err instanceof Error ? err.message : "Authentication failed";
      console.log("Error while signing in: ", errorMessage);
      router.push("/login");
    }

    
  }

  const { isSubmitting } = form.formState;

  return (
    <form id="signin-form" onSubmit={form.handleSubmit(handleSignIn)}>
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
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
            <Field data-invalid={fieldState.invalid}>
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
      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-8 w-full">
        <LoadingSwap isLoading={isSubmitting}>Sign In</LoadingSwap>
      </Button>
    </form>
  );
}
