"use client"
import { menuItems } from "@/constants";
import MenuItem from "../MenuItem";
import Image from "next/image";
import { SheetClose } from "../ui/sheet";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  return (
    <div>
      <nav className="flex flex-1 flex-col justify-start gap-4">
        {menuItems.map((item) => {
          const LinkItem = (
            <MenuItem href={item.href} >
              <Image
                src={item.iconPath}
                width={16}
                height={16}
                alt={`${item.name} icon`}
                className="invert-colors mr-1.5 h-auto w-auto"
              />
              {item.name}
            </MenuItem>
          );
          return isMobileNav ? <SheetClose key={item.name}>{LinkItem}</SheetClose> : <React.Fragment key={item.name}>{LinkItem}</React.Fragment>;
        })}
      </nav>
    </div>
  );
};

export default NavLinks;
