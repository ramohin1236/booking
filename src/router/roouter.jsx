import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import CoomingSoon from "../Pages/CoomingSoon";
import RoomHoom from "../Pages/RoomHoom";
import RoomDetails from "../Pages/RoomDetails";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/soon',
            element: <CoomingSoon/>
        },
        {
            path: '/room',
            element: <RoomHoom/>
        },
        {
            path: '/service-details',
            element: <RoomDetails/>
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