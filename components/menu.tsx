"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogOutIcon, User2Icon } from "lucide-react";
import MenuItem from "./MenuItem";
import { authClient } from "@/lib/auth-client";
import { setFlashToast } from "@/lib/toast";
import ROUTES from "@/constants/routes";

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
  const router = useRouter();

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setFlashToast({ toastType: "success", message: "Logout Successful" });
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <aside className="background-light800_dark200 fixed flex h-[94vh] max-w-48 flex-col justify-between px-4 py-4 max-sm:hidden">
      <nav className="flex flex-1 flex-col justify-start gap-4">
        {menuItems.map((item) => (
          <MenuItem onClick={() => setSelectedItem(item.name)} isSelected={selectedItem === item.name} key={item.name}>
            <Image
              src={item.iconPath}
              width={16}
              height={16}
              alt={`${item.name} icon`}
              className="invert-colors mr-1.5 h-auto w-auto"
            />
            {item.name}
          </MenuItem>
        ))}
      </nav>

      <div>
        <MenuItem onClick={() => {
          setSelectedItem("Profile");
          router.push(ROUTES.PROFILE);
        }} isSelected={selectedItem === "Profile"}>
          <User2Icon />
          My Profile
        </MenuItem>
        <MenuItem onClick={logout} isSelected={false}>
          <LogOutIcon />
          Logout
        </MenuItem>
      </div>
    </aside>
  );
};
