"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { clearFlashToast, setFlashToast } from "@/lib/toast";
import { toast } from "sonner";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const [isLoading, setIsLoading] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  /**
   * another way to do the handleSignin
   * const handleSignin = async (provider:"github" | "google") => {
      rather than using the try catch, we can use the in built callback handlers provided by better auth
      like 
      await authClient.signIn.social(
      {
        provider, 
        callbackURL: ROUTES.HOME
      }, 
      {
        onError: (error) => {
          clearFlashToast();
          toast.error(error.error.message || "Failed to sign in", {
            style: {
              "--border-radius": "calc(var(--radius)  + 8px)",
            } as React.CSSProperties,
            duration: 4000,
          });
          router.push(ROUTES.SIGN_IN);
        }, 
        onSuccess: () => {
          setFlashToast({ toastType: "success", message: "Welcome!", description: "Successfully authenticated" });
          
        }
      }
      )
   }
   */

  const handleSignin = async (provider: "github" | "google") => {
    setIsLoading(provider);
    setError(null);
    try {
      // I set the flash toast optimistically before the `await` — if `signIn.social` throws (caught below), the user never navigates away, so that stale flash would incorrectly fire on some future navigation. Clearing it in the catch block:
      setFlashToast({ toastType: "success", message: "Welcome!", description: "Successfully authenticated" });
      await authClient.signIn.social({ provider, callbackURL: ROUTES.HOME });
    } catch (err) {
      clearFlashToast();
      console.log("Error while signing in: ", err);
      toast.error(`Error while authenticating with ${provider}`, {
        position: "top-right",
      });
      const errorMessage = err instanceof Error ? err.message : "Authentication failed";
      setError(errorMessage);
      setIsLoading("");
      router.push("/login");
    }
  };

  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-xl hover:shadow-md hover:shadow-orange-500/40 dark:hover:shadow-orange-700/30";
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button className={buttonClasses} onClick={() => handleSignin("github")} disabled={isLoading !== ""}>
        {isLoading === "github" ? (
          <span>Loading...</span>
        ) : (
          <>
            <Image
              src="/icons/github.svg"
              width={20}
              height={20}
              alt="github-logo"
              className="invert-colors mr-1.5 h-auto w-auto object-contain"
            />
            <span>Log in with GitHub</span>
          </>
        )}
      </Button>

      <Button className={buttonClasses} onClick={() => handleSignin("google")} disabled={isLoading !== ""}>
        {isLoading === "google" ? (
          <span>Loading...</span>
        ) : (
          <>
            <Image
              src="/icons/google.svg"
              width={20}
              height={20}
              alt="google-logo"
              className="mr-1.5 h-auto w-auto object-contain"
            />
            <span>Log in with Google</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialAuthForm;
