import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useEffect } from "react";
import App from "@/pages/App";
import NotFound from "@/pages/NotFound";
import KatalogHabbie from "@/pages/katalogHabbie";
import KatalogCessa from "@/pages/katalogCessa";
import { setAxiosWithConfig } from "@/utils/apis/axiosWithConfig";
import Detail from "@/pages/detail";

export default function Router() {
  useEffect(() => {
    setAxiosWithConfig(
      "",
      "https://65221ef5a4199548356db19f.mockapi.io/api/v1"
    );
  }, []);

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
      path: "/details/:id",
      element: <Detail />,
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
