import Image from "next/image";
import { LogOutIcon, User2Icon } from "lucide-react";
import MenuItem from "./MenuItem";
import ROUTES from "@/constants/routes";

type menuItem = {
  name: string;
  iconPath: string;
  href: string;
};

const menuItems: menuItem[] = [
  {
    name: "Home",
    iconPath: "/icons/home.svg",
    href: ROUTES.HOME,
  },
  {
    name: "Collection",
    iconPath: "/icons/star.svg",
    href: ROUTES.COLLECTION,
  },
  {
    name: "Find Jobs",
    iconPath: "/icons/suitcase.svg",
    href: ROUTES.FIND_JOBS,
  },
  {
    name: "Tags",
    iconPath: "/icons/tag.svg",
    href: ROUTES.TAGS,
  },
  {
    name: "Communities",
    iconPath: "/icons/users.svg",
    href: ROUTES.COMMUNITIES,
  },
  {
    name: "Ask a Question",
    iconPath: "/icons/question.svg",
    href: ROUTES.ASK_A_QUESTION,
  },
] as const;

export const LeftMenu = () => {
  

  return (
    <aside className="background-light800_dark200 fixed flex h-[94vh] max-w-48 flex-col justify-between px-4 py-4 max-sm:hidden">
      <nav className="flex flex-1 flex-col justify-start gap-4">
        {menuItems.map((item) => (
          <MenuItem href={item.href} key={item.name}>
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
        <MenuItem href={ROUTES.PROFILE}>
          <User2Icon />
          My Profile
        </MenuItem>
        <MenuItem href="logout">
          <LogOutIcon />
          Logout
        </MenuItem>
      </div>
    </aside>
  );
};
