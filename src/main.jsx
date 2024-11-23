import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css"; 
import { About } from "./Pages/About.jsx";
import { Products } from "./Pages/Products.jsx";
import { Contact } from "./Pages/Contact.jsx"; 
import { Header } from "./Components/Header.jsx";
import { Home } from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import Profile from "./Pages/Profile.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
