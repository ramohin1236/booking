import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import CoomingSoon from "../Pages/CoomingSoon";
import RoomHoom from "../Pages/RoomHoom";
import RoomDetails from "../Pages/RoomDetails";
import SearchResults from "../Pages/SearchResults";
import ChekOut from "../components/ChekOut/ChekOut";
import PrivateRoute from "./PrivateRoute";



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
        {
            path: '/service-result',
            element: <SearchResults/>
        },
        {
            path: '/chekout',
            element: <PrivateRoute><ChekOut/></PrivateRoute>
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