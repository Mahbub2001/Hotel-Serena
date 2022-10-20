import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Experiences from "../pages/Experience/Experiences";
import Home from "../pages/Home/Home";
import Host from "../pages/Host/Host";
import Login from "../pages/Login/Login";
import Packages from "../pages/Packages/Packages";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/home',
                element:<Home/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/register',
                element:<Signup/>,
            },
            {
                path:'/packages',
                element:<Packages/>,
            },
            {
                path:'/host',
                element:<Host/>,
            },
            {
                path:'/experience',
                element:<Experiences/>,
            },
        ]
    }
])