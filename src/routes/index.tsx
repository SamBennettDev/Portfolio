import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./public";

import { ErrorPage } from "@/features/misc";
import { FOFPage } from "@/features/misc";

const commonRoutes = [
  {
    path: "*",
    element: <FOFPage />,
    errorElement: <ErrorPage />,
  },
];

export const AppRoutes = () => {
  const routes = publicRoutes.concat(commonRoutes);

  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
