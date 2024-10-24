import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet,Link, Router } from "react-router-dom";


import Header from "./src/components/Header";
import Help from "./src/components/Help";
import Dashboard from "./src/components/Dashboard";
import Profile from "./src/components/Profile"; 
import Body from "./src/components/Body";


import "./src/styles/header.css";



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
                path : "/help",
                element : <Help/>,
                errorElement : <Error/>
            },
        ],
        errorElement : <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);