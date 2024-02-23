import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import React from "react";
import App from "@/pages/App";
import NotFound from "@/pages/NotFound";
import KatalogHabbie from "@/pages/katalogHabbie";
import KatalogCessa from "@/pages/katalogCessa";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      title: "Beranda",
    },
    {
      path: "/katalog-habbie",
      element: <KatalogHabbie />,
      title: "Beranda",
    },
    {
      path: "/katalog-cessa",
      element: <KatalogCessa />,
      title: "Beranda",
    },
    {
      path: "*",
      element: <NotFound />,
      title: "404 Not Found",
    },
  ]);
  return <RouterProvider router={router} />;
}
