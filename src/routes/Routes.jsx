import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
      },
      {
          path: '/register',
          element: <Register></Register>
      },
      ],
    },
  ]);