import ROUTES from "./routes";

type menuItem = {
  name: string;
  iconPath: string;
  href: string;
};

export const menuItems: menuItem[] = [
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