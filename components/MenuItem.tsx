"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { setFlashToast } from "@/lib/toast";
import { authClient } from "@/lib/auth-client";
import ROUTES from "@/constants/routes";

interface MenuItemProps {
  children: React.ReactNode;
  href?: string;
  clickHandler?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, href }) => {
  const router = useRouter();

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setFlashToast({ toastType: "success", message: "Logout Successful" });
          router.push(ROUTES.SIGN_IN);
        },
      },
    });
  };

  const pathname = usePathname();

  const selectedButtonClasses =
    "primary-gradient text-light-900 hover:shadow-md hover:shadow-orange-500/40 dark:hover:shadow-orange-700/30";

  const notSelectedButtonClasses =
    "background-light800_dark200 text-dark200_light800 hover:bg-light-700 dark:hover:bg-dark-400";

  const isSelected = href ? href === pathname : false;

  return (
    <Button
      asChild={Boolean(href)}
      onClick={href === "logout" ? logout : () => {}}
      variant="ghost"
      className={cn(
        "subtle-regular flex w-full justify-start py-5 transition-all duration-200",
        isSelected ? selectedButtonClasses : notSelectedButtonClasses
      )}
    >
      {href ? (
        <Link href={href} aria-current={isSelected ? "page" : undefined}>
          {children}
        </Link>
      ) : (
        <span>{children}</span>
      )}
    </Button>
  );
};

export default MenuItem;


