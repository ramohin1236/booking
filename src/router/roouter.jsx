import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        
      ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Registration/>
    },
  ]);