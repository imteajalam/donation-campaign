import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import Donations from "./pages/Donations/Donations";
import DonationDetails from "./pages/DonationDetails/DonationDetails";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("https://raw.githubusercontent.com/rahathossenantor/fun-with-api/main/donations.json")
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);