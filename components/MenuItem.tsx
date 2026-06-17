import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, isSelected = true, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={cn(
        "flex justify-start subtle-regular gap-2.5 transition-all duration-200 py-5",
        isSelected
          ? "primary-gradient text-light-900 hover:shadow-md hover:shadow-orange-500/40 dark:hover:shadow-orange-700/30"
          : "background-light800_dark200 text-dark200_light800 hover:bg-light-700 dark:hover:bg-dark-400"
      )}
    >
      {children}
    </Button>
  );
};

export default MenuItem;
