import React, { useRef } from "react";
import { HeroPage } from "./HeroPage";
import { EducationPage } from "./EducationPage";
import { navbarHeight } from "@/utils/sizes";
import { ProjectsPage } from "./ProjectsPage";
import { ExperiencePage } from "./ExperiencePage";
import { ContactPage } from "./ContactPage";
import { TitleSplitter } from "@/components/TitleSplitter";

export const Home = ({ element }: { element: string }) => {
  // Create refs for the components
  const heroRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the referenced component based on the element prop
  const scrollToComponent = () => {
    let targetRef: React.RefObject<HTMLDivElement> | null = null;

    if (element === "Hero") {
      targetRef = heroRef;
    } else if (element === "Education") {
      targetRef = educationRef;
    } else if (element === "Projects") {
      targetRef = projectsRef;
    } else if (element === "Experience") {
      targetRef = experienceRef;
    } else if (element === "Contact") {
      targetRef = contactRef;
    }

    if (targetRef && targetRef.current) {
      const offsetTop =
        targetRef.current.getBoundingClientRect().top + window.scrollY; // Get the top position of the component
      const scrollTo = offsetTop - Number(navbarHeight); // Adjust by navbar height
      window.scrollTo({ top: scrollTo, behavior: "smooth" }); // Scroll smoothly
    }
  };

  // Call scrollToComponent when the component mounts or when `element` changes
  React.useEffect(() => {
    scrollToComponent();
  }, [element]);

  return (
    <div className="w-full flex flex-col items-center bg-card">
      <div
        ref={heroRef}
        className="w-full max-w-[720px] px-[1.5rem] md:px-[40px]"
      >
        <HeroPage />
      </div>

      <TitleSplitter sectionRef={educationRef} sectionTitle="Education" />

      <div className="w-full md:px-[40px] pt-[50px]">
        <EducationPage />
      </div>

      <TitleSplitter sectionRef={projectsRef} sectionTitle="Projects" />

      <div className="w-full px-[1.5rem] md:px-[40px] pt-[50px]">
        <ProjectsPage />
      </div>

      <TitleSplitter sectionRef={experienceRef} sectionTitle="Experience" />

      <div className="w-full md:px-[40px] pt-[50px]">
        <ExperiencePage />
      </div>

      <TitleSplitter sectionRef={contactRef} sectionTitle="Contact" />

      <div className="w-full px-[1.5rem] md:px-[40px] pt-[50px]">
        <ContactPage />
      </div>
    </div>
  );
};
