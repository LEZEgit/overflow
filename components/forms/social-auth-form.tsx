import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
    const buttonClasses = "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-xl";
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Button className={buttonClasses}>
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="github-logo"
          className="invert-colors mr-1.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClasses}>
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="google-logo"
          className="mr-1.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
