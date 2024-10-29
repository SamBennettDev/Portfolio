import { navbarHeight } from "@/utils/sizes";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggleSwitch";
import { SideBar } from "./SideBar";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` md:hidden sticky top-0 z-[101] backdrop-blur-md w-full`}
      style={{ height: `${navbarHeight}px` }}
    >
      <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />

      <div
        className={`flex justify-between items-center px-[20px] h-full ${
          isOpen ? "" : ""
        }`}
      >
        <div
          className={`flex items-center transition-all duration-300`}
          style={{
            transform: isOpen ? `translateX(70vw)` : "translateX(0)",
          }}
        >
          {/* Hamburger menu */}
          <button
            className="md:hidden h-10 w-10"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <div className="grid justify-items-center gap-[5px]">
              <span
                className={`h-[2px] w-5 rounded-full bg-foreground transition duration-300  ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              ></span>
              <span
                className={`h-[2px] w-5 rounded-full bg-foreground ${
                  isOpen ? "scale-x-0 transition" : ""
                }`}
              ></span>
              <span
                className={`h-[2px] w-5 rounded-full bg-foreground transition duration-300  ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`transition duration-300  ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
