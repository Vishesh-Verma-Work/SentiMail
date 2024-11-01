import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet,Link, Router } from "react-router-dom";


import Feedback from "./src/components/Feedback";
import Dashboard from "./src/components/Dashboard";
import Profile from "./src/components/Profile"; 
import Body from "./src/components/Body";
import FeedbackDetails from "./src/components/FeedbackDetails";
import Header from "./src/components/Header";


import "./src/styles/header.css";
import "./src/styles/feedback.css";
import "./src/styles/feedbackdetails.css";
import "./src/styles/body.css";



const AppLayout = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}



const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>,
                errorElement : <Error/>
            },
            {
                path : "/dashboard",
                element : <Dashboard/>,
                errorElement : <Error/>
            },
            {
                path : "/profile",
                element : <Profile/>,
                errorElement : <Error/>
            },
            {
                path : "/feedback",
                element : <Feedback/>,
                errorElement : <Error/>
            },
            {
                path : "feedback/details",
                element : <FeedbackDetails/>,
                errorElement : <Error/>
            },
        ],
        errorElement : <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);