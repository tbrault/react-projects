import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App/App";
import Home from "./pages/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import CocktailDetails from "./pages/CocktailDetails/CocktailDetails";
import "./style/index.css";
import { AppProvider } from "./context/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktails/:cocktailID",
        element: <CocktailDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
