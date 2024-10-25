import { MainNavItem, NavItem } from "@/types/nav";
import {
  faContactBook,
  faFolder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export const mainNav: MainNavItem[] = [
  {
    title: "Education",
    href: "/Education",
    icon: faHome,
  },
  {
    title: "Projects",
    href: "/Projects",
    icon: faHome,
  },
  {
    title: "Experience",
    href: "/Experience",
    icon: faFolder,
  },
  {
    title: "Contact",
    href: "/Contact",
    icon: faContactBook,
  },
];

export const appNav: NavItem[] = [
  {
    title: "Education",
    href: "/Education",
    icon: faHome,
  },
  {
    title: "Home",
    href: "/",
    icon: faHome,
  },
  {
    title: "Experience",
    href: "/Experience",
    icon: faFolder,
  },
  {
    title: "Contact",
    href: "/Contact",
    icon: faContactBook,
  },
];
