import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import RootLayout from "@/layouts/RootLayout";
import AuthLayout from "@/layouts/AuthLayout";
import RoutesLayout from "@/layouts/RoutesLayout";
import IndexPage from "./IndexPage";
import Favourites from "@/routes/favourites";
import SignInPage from "@/routes/sign-in";
import SignUpPage from "@/routes/sign-up";
import ErrorPage from "@/routes/error-page";
import RecipeInfo from "@/routes/recipe-info";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/sign-in", element: <SignInPage /> },
          { path: "/sign-up", element: <SignUpPage /> },
          { path: "*", element: <ErrorPage /> },
        ],
      },
      {
        element: <RoutesLayout />,
        children: [
          { path: "/", element: <IndexPage /> },
          {
            path: "/favourites",
            element: <Favourites />,
          },
          {
            path: "recipe/:recipeId",
            element: <RecipeInfo />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
