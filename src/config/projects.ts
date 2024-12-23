import {
  AlgoSort,
  BetterCanvas,
  GtAccount,
  GtAccountSettings,
  GtAnalytics,
  GtExercises,
  GtHome,
  GtTimer,
  Securaflow,
  Spreadsheet,
} from "@/assets/images";
import { Icons } from "@/components/icons";

export const projectConfig = [
  {
    name: "Securaflow",
    description:
      "A centralized vulnerability management system leveraging APIs of existing task management software.",
    tags: [
      {
        name: "TS",
        color: "text-blue-500/60",
      },
      {
        name: "MERN",
        color: "text-green-500/60",
      },
      {
        name: "AWS",
        color: "text-pink-500/60",
      },
    ],
    images: [Securaflow],
    source_code_link:
      "https://gitlab.com/sambennettdev/securaflow/-/wikis/Securaflow",
    icon: Icons.gitLab,
  },
  {
    name: "Better Canvas",
    description:
      "Custom IOS widget leveraging the Canvas API to show real-time grades and recent assignments on iPhone or IPad homescreens.",
    tags: [
      {
        name: "JS",
        color: "text-blue-500/60",
      },
      {
        name: "Canvas API",
        color: "text-green-500/60",
      },
      {
        name: "Widgy",
        color: "text-pink-500/60",
      },
    ],
    images: [BetterCanvas],
    source_code_link: "https://github.com/SamBennettDev/better-canvas",
    icon: Icons.gitHub,
  },
  {
    name: "Gains Tracker",
    description:
      "A workout tracker I developed to track store my workout data in a simple and easy to use UI.",
    tags: [
      {
        name: "TS",
        color: "text-blue-500/60",
      },
      {
        name: "React",
        color: "text-green-500/60",
      },
      {
        name: "Firebase",
        color: "text-pink-500/60",
      },
    ],
    images: [
      GtHome,
      GtExercises,
      GtAnalytics,
      GtTimer,
      GtAccount,
      GtAccountSettings,
    ],
    source_code_link: "https://github.com/SamBennettDev/workout-tracker",
    icon: Icons.gitHub,
  },
  {
    name: "React Essentials",
    description:
      "A comprehensive, opinionated starter kit designed to accelerate your React projects by providing a solid foundation with Vite, TypeScript, and Tailwind CSS.",
    tags: [
      {
        name: "TS",
        color: "text-blue-500/60",
      },
      {
        name: "React",
        color: "text-green-500/60",
      },
      {
        name: "Tailwind",
        color: "text-pink-500/60",
      },
    ],
    images: ["./src/assets/images/gt-home.png"],
    source_code_link: "https://github.com/SamBennettDev/React-Essentials",
    icon: Icons.gitHub,
  },
  {
    name: "AlgoSort",
    description:
      "An education application that teaches sorting algorithms in a fun interactive way. Written as a group over 5 weeks using source control and sprints.",
    tags: [
      {
        name: "C++",
        color: "text-blue-500/60",
      },
      {
        name: "Qt Creator",
        color: "text-green-500/60",
      },
      {
        name: "Box2D",
        color: "text-pink-500/60",
      },
    ],
    images: [AlgoSort],
    source_code_link:
      "https://vimeo.com/manage/videos/831628922?embedded=false&source=video_title&owner=181630258",
    icon: Icons.vimeo,
  },
  {
    name: "Spreadsheet",
    description:
      "Fully functional spreadsheet application with formula evaluation, custom file extensions, and 2,574 cells.",
    tags: [
      {
        name: ".Net",
        color: "text-blue-500/60",
      },
      {
        name: "Visual Studio",
        color: "text-green-500/60",
      },
      {
        name: "Windows Forms",
        color: "text-pink-500/60",
      },
    ],
    images: [Spreadsheet],
    source_code_link:
      "https://vimeo.com/735094339?embedded=true&source=video_title&owner=181630258",
    icon: Icons.vimeo,
  },
];
