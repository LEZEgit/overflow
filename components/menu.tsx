import { LogOutIcon, User2Icon } from "lucide-react";
import MenuItem from "./MenuItem";
import ROUTES from "@/constants/routes";
import NavLinks from "./navigation/NavLinks";

export const LeftMenu = () => {
  return (
    <aside className="background-light800_dark200 fixed flex h-[94vh] max-w-48 flex-col justify-between px-4 py-4 max-sm:hidden">
      <NavLinks />
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
