"use client";
import { useState } from "react";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import MenuItem from "./MenuItem";

type menuItem = {
  name: string;
  iconPath: string;
};

const menuItems: menuItem[] = [
  {
    name: "Home",
    iconPath: "/icons/home.svg",
  },
  {
    name: "Collection",
    iconPath: "/icons/star.svg",
  },
  {
    name: "Find Jobs",
    iconPath: "/icons/suitcase.svg",
  },
  {
    name: "Tags",
    iconPath: "/icons/tag.svg",
  },
  {
    name: "Communities",
    iconPath: "/icons/users.svg",
  },
  {
    name: "Ask a Question",
    iconPath: "/icons/question.svg",
  },
] as const;

type MenuItems = (typeof menuItems)[number]["name"];

export const LeftMenu = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItems>(menuItems[0].name);

  const logout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="background-light800_dark200 flex fixed h-[94vh] w-45 flex-col justify-between px-4 py-4">
      <div className="flex flex-1 flex-col justify-start gap-4">
        {menuItems.map((item) => (
          <MenuItem onClick={() => setSelectedItem(item.name)} isSelected={selectedItem === item.name} key={item.name}>
            <Image 
            src={item.iconPath} 
            width={16} 
            height={16} 
            alt={`${item.name} icon`} 
           className="invert-colors mr-1.5 object-contain" 
            />
            {item.name}
          </MenuItem>
        ))}
      </div>
      <MenuItem onClick={logout} isSelected={false}>
        <LogOutIcon />
        Logout
      </MenuItem>
    </div>
  );
};
