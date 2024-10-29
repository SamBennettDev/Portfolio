import { Button } from "@/components/ui/button";
import { socialsList } from "@/config/socials";
import { navbarHeight } from "@/utils/sizes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HeroPage = () => {
  const [scrollDialogHovered, setScrollDialogHovered] = useState(false);

  return (
    <>
      <div
        className="flex justify-center items-center min-h-[400px]"
        style={{ height: `calc(100svh - ${navbarHeight}px - 100px)` }}
      >
        <div className="z-[1] w-full">
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
          <p className="md:text-center mt-[2rem] text-muted-foreground">
            I recently graduated from the University of Utah with a degree in
            Computer Science. I love diving into challenges and finding
            creative, efficient solutions—it's a bit of an art for me. Let's
            build something great together.
          </p>
          <div className="flex items-center justify-center gap-[20px] mt-[5rem] md:mt-[1.5rem] text-muted-foreground">
            <Link to={"/Contact"}>
              <Button>Contact Me</Button>
            </Link>
            <Link
              to={
                "https://drive.google.com/file/d/1azg4vWEJoqvN3nN3mrCGeGl2wYnkSpVQ/view?usp=drive_link"
              }
              target="_blank"
            >
              <Button variant={"outline"}>My Resume</Button>
            </Link>
            {socialsList.map((socialItem) => {
              return (
                <Link
                  to={socialItem.href}
                  target="_blank"
                  key={socialItem.title}
                  className="hidden md:block"
                >
                  <Button variant={"outline"} className="w-[54px] h-[54px]">
                    <FontAwesomeIcon
                      icon={socialItem.icon}
                      className="text-lg"
                    />
                  </Button>
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
        <div className="absolute top-0 left-0 w-full h-[100px] bg-card z-[0]"></div>
      </div>
    </>
  );
};
