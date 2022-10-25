import React from "react";

import { Home, Detail, Guest, Page404 } from "./pages";

export const element = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: ":cd",
        element: <Detail />,
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
