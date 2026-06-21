import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/darkModeToggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="background-light800_dark200 shadow-light-300 fixed z-50 flex h-12 w-full items-center justify-between gap-5 px-4 sm:px-8 dark:shadow-none">
      <div className="flex justify-start">

      <Button variant="ghost" className="hidden hover:bg-gray-600 max-sm:flex">
        <Image src="/icons/hamburger.svg" width={16} height={16} alt="HAMBURGER" className="invert-colors" />
      </Button>

      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/site-logo.svg" width={23} height={23} alt="Overflow Logo" />

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="text-primary-500">Over</span>flow
        </p>
      </Link>
      </div>
      <p>Global Search</p>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
