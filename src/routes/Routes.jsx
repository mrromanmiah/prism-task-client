import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import MyTask from "../pages/dashboard/MyTask";

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
    {
      path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/tasks',
            element: <MyTask></MyTask>
        }
        ]
    }
  ]);