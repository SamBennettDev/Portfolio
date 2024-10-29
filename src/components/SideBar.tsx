import { mainNav } from "@/config/nav-items";
import { navbarHeight } from "@/utils/sizes";
import { Link } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`absolute h-screen w-screen top-0 left-0 transition-all duration-300 bg-gradient-to-r from-card from-80% to-100% ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo (only visible when menu is open) */}
      <div className="w-[80%] items-center content-center flex flex-col gap-[20px]">
        <div
          className={`flex justify-center items-center w-full px-[20px]`}
          style={{ height: `${navbarHeight}px` }}
        >
          <Link
            to="/"
            className={`flex items-center justify-center w-min text-2xl`}
            onClick={toggleMenu}
          >
            <div className="font-bold">Sam</div>
            <div className="">Bennett</div>
          </Link>
        </div>

        {/* Navigation links (only visible when menu is open) */}
        {mainNav.map((navItem, index) => (
          <Link
            key={index}
            to={navItem.href}
            className={
              location.pathname === navItem.href
                ? "text-foreground w-min text-xl"
                : "text-muted-foreground hover:text-foreground w-min text-xl"
            }
            target={navItem.external ? "_blank" : undefined}
            onClick={toggleMenu}
          >
            {navItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
