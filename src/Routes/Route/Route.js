import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignUp from "../../Pages/Register/SignUp";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
              },
              {
                path:'/add-service',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
              },
              {
                path:'/signup',
                element:<SignUp></SignUp>
              },
              {
                path:'/review/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params}) => fetch(`http://localhost:5000/review/${params.id}`)
                
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