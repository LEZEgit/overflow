"use client";
import MenuItem from "@/components/MenuItem";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import { User2Icon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "../NavLinks";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Image src="/icons/hamburger.svg" width={36} height={36} alt="Menu" className="invert-colors" />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <SheetHeader>
          <Link href="/" className="flex items-center gap-1">
            <Image src="/images/site-logo.svg" width={32} height={32} alt="Overflow Logo" className="h-auto w-auto" />

            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
              <span className="text-primary-500">Over</span>flow
            </p>
          </Link>
        </SheetHeader>

        <div onClickCapture={() => setOpen(false)}>
          <NavLinks />
        </div>

        <SheetFooter>
          <div onClick={() => setOpen(false)}> {/* Replacement for SheetClose because it only accepted Intrinsic components as children */}
            <MenuItem href={ROUTES.PROFILE}>
              <User2Icon />
              My Profile
            </MenuItem>
          </div>
          <div onClick={() => setOpen(false)}>
            <MenuItem href="logout">
              <LogOutIcon />
              Logout
            </MenuItem>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
