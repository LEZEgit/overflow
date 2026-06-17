import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const OrangeButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      onClick={}
      variant="ghost"
      className={cn(
        "subtle-regular flex justify-start gap-2.5 py-5 transition-all duration-200",
        "primary-gradient text-light-900 hover:shadow-md hover:shadow-orange-500/40 dark:hover:shadow-orange-700/30"
      )}
    >
      {children}
    </Button>
  );
};

export default OrangeButton;
