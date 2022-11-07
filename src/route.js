import React from "react";

import { Home, Detail, Guest, Page404, Create } from "./pages";

export const element = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: false,
        path: ":cd",
        element: <Detail />,
      },
      {
        index: false,
        path: "create",
        element: <Create />,
      },
    ],
  },
  {
    path: "/guest",
    element: <Guest />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];
