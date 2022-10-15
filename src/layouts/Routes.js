
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Root from "../components/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,

        children: [
            {

                path: '/',
                element: <Home></Home>,

            },
            {
                // index:true,
                path: '/home',
                element: <Home></Home>,

            },
            {
                path: '/quiz',
                element: <Blog></Blog>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            }

        ]

    },



])

export default router