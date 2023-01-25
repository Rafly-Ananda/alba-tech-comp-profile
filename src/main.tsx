import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import UserPage from "./pages/UserPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Navigate to="/" replace />,
    children: [
      { index: true, element: <App /> },
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
