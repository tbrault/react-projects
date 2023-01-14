import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App/App";
import Home from "./pages/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import "./style/index.css";
import { AppProvider } from "./context/AppContext";
import Loading from "./features/Loading/Loading";

const LazyCocktailDetails = lazy(
  () => import("./pages/CocktailDetails/CocktailDetails")
);

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
        element: (
          <Suspense fallback={<Loading />}>
            <LazyCocktailDetails />
          </Suspense>
        ),
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
