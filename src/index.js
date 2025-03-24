import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ceateBrowseRouter,createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';
import EventListingPage from './views/Events/Event';

const root =  ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/events",
        element:<EventListingPage/>
    },
    

])

root.render(<div>
<RouterProvider router={router}/>

</div>)
