"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const SocialAuthForm = () => {
  const [isLoading, setIsLoading] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const signin = async (provider: "github" | "google") => {
    setIsLoading(provider);
    setError(null);
    try {
      await authClient.signIn.social({ provider, callbackURL: "/" });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Authentication failed";
      setError(errorMessage);
      setIsLoading("");
      router.push("/sign-in");
    }
  };

  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-xl hover:shadow-md hover:shadow-orange-500/40 dark:hover:shadow-orange-700/30";
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Button className={buttonClasses} onClick={() => signin("github")} disabled={isLoading !== ""}>
        {isLoading === "github" ? (
          <span>Loading...</span>
        ) : (
          <>
            <Image
              src="/icons/github.svg"
              width={20}
              height={20}
              alt="github-logo"
              className="invert-colors mr-1.5 object-contain"
            />
            <span>Log in with GitHub</span>
          </>
        )}
      </Button>

      <Button className={buttonClasses} onClick={() => signin("google")} disabled={isLoading !== ""}>
        {isLoading === "google" ? (
          <span>Loading...</span>
        ) : (
          <>
            <Image src="/icons/google.svg" width={20} height={20} alt="google-logo" className="mr-1.5 object-contain" />
            <span>Log in with Google</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialAuthForm;
