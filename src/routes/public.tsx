import { Home } from "@/features/home";

export const publicRoutes = [
  {
    path: "/",
    element: <Home element="Hero" />,
  },
  {
    path: "/Education",
    element: <Home element="Education" />,
  },
  {
    path: "/Projects",
    element: <Home element="Projects" />,
  },
  {
    path: "/Experience",
    element: <Home element="Experience" />,
  },
  {
    path: "/Contact",
    element: <Home element="Contact" />,
  },
];
