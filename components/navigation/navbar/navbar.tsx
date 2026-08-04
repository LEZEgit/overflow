import { ModeToggle } from "@/components/ui/darkModeToggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="background-light800_dark200 shadow-light-300 fixed z-50 flex h-12 w-full items-center justify-between gap-5 px-2 sm:px-8 dark:shadow-none">
      <div className="flex justify-start">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/images/site-logo.svg" width={32} height={32} alt="Overflow Logo" className="h-auto w-auto" />

          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            <span className="text-primary-500">Over</span>flow
          </p>
        </Link>
      </div>
      <p>Global Search</p>
      <div className="flex items-center justify-between gap-2">
        <ModeToggle />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
