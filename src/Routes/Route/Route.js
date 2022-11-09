import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Register/SignUp";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[

            {
                path:'/',
                element:<Home></Home>
              },
              {
                path:'/home',
                element:<Home></Home>
              },
              {
                path:'/blog',
                element:<Blog></Blog>
              },
              {
                path:'/login',
                element:<Login></Login>
              },
              {
                path:'/signup',
                element:<SignUp></SignUp>
              },
              {
                path:'/services',
                element:<AllServices></AllServices>
              }
        ]
    }
])