
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz";
import Root from "../components/Root";
import ErrorPage from "../ErrorPage"
import QuizDetails from "../components/QuizDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage/>,

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
                element: <Quiz></Quiz>,
                loader: () => fetch("https://openapi.programming-hero.com/api/quiz/"),
            },
            {
                path: '/quiz/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <QuizDetails></QuizDetails>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            }

        ]

    },



])

export default router