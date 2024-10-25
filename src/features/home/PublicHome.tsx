import { socialsList } from "@/config/socials";
import { navbarHeight } from "@/utils/sizes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PublicHome = () => {
  const [scrollDialogHovered, setScrollDialogHovered] = useState(false);

  return (
    <>
      <div
        className="flex justify-center items-center relative min-h-[400px]"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div className="z-[1] w-full max-w-[720px] px-[1.5rem] md:px-[40px]">
          <h1
            className="text-center font-sans font-semibold leading-none"
            style={{
              fontSize: "clamp(24px, 3.75vw, 48px)",
              letterSpacing: "clamp(-2.4px, calc(-1px - 0.1vw), -0.96px)",
              textWrap: "balance",
            }}
          >
            Hi, I'm Sam Bennett
          </h1>
          <h2 className="md:text-center mt-[2rem] text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            consequat diam. Curabitur tristique est nec porttitor tincidunt.
            Curabitur luctus turpis dictum turpis euismod consequat. Aenean ac
            eros efficitur, pulvinar nulla sed, posuere ante.
          </h2>
          <div className="flex items-center justify-center gap-[20px] mt-[5rem] md:mt-[1.5rem] text-muted-foreground">
            <Link to={"/Contact"}>
              <button className="hover:bg-primary bg-primary/90 text-card py-[15px] px-[20px] rounded-2xl">
                Contact Me
              </button>
            </Link>
            <button className="hover:bg-foreground hover:text-card border-[1px] border-foreground/90 text-foreground py-[15px] px-[20px] rounded-2xl">
              View Resume
            </button>
            {socialsList.map((socialItem) => {
              return (
                <Link
                  to={socialItem.href}
                  target="_blank"
                  key={socialItem.title}
                  className="hidden md:block"
                >
                  <button className="hover:bg-foreground hover:text-card border-[1px] border-foreground/90 text-foreground w-[54px] h-[54px] rounded-2xl">
                    <FontAwesomeIcon
                      icon={socialItem.icon}
                      className="text-lg"
                    />
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
        <Link
          to={"/Education"}
          onMouseEnter={() => setScrollDialogHovered(true)} // Set to true when hovered
          onMouseLeave={() => setScrollDialogHovered(false)} // Set to false when not hovered
        >
          <div className="absolute flex flex-col gap-[3px] justify-end items-center bottom-[1.5rem] left-1/2 -translate-x-1/2 w-[50px] h-[20px] z-[1]">
            <div className="relative w-full h-1/2 animate-bounce">
              <div
                className={`absolute top-0 left-0 w-[27px] h-[3px] rotate-[25deg] rounded ${
                  scrollDialogHovered ? "bg-foreground" : "bg-background"
                }`}
              />
              <div
                className={`absolute top-0 right-0 w-[27px] h-[3px] -rotate-[25deg] rounded ${
                  scrollDialogHovered ? "bg-foreground" : "bg-background"
                }`}
              />
            </div>
            <div className="relative w-full h-1/2 animate-bounce">
              <div
                className={`absolute top-0 left-[5px] w-[22px] h-[2px] rotate-[25deg] rounded ${
                  scrollDialogHovered ? "bg-foreground" : "bg-background"
                }`}
              />
              <div
                className={`absolute top-0 right-[5px] w-[22px] h-[2px] -rotate-[25deg] rounded ${
                  scrollDialogHovered ? "bg-foreground" : "bg-background"
                }`}
              />
            </div>
          </div>
        </Link>
        <div className="absolute top-0 left-0 w-full h-full bg-card md:rounded-b-[150px] z-[0]"></div>
      </div>
      <div
        className="flex justify-center items-center relative"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      ></div>
    </>
  );
};
