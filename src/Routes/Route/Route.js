import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/Register/SignUp";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

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
                path:'/my-review',
                element:<MyReview></MyReview>
              },
              {
                path:'/add-service',
                element:<MyReview></MyReview>
              },
              {
                path:'/signup',
                element:<SignUp></SignUp>
              },
              {
                path:'/services',
                element:<AllServices></AllServices>
              },
              {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
              }
        ]
    }
])