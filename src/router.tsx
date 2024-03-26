import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import {
    ErrorPage,
    FoundMoviesPage,
    MovieDetailsPage,
    MoviesPage,
    TopRatedMoviesPage,
    UpcomingMoviesPage
} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: '/movies/:movieId', element: <MovieDetailsPage/>
            },
            {
                path: 'found-movies', element: <FoundMoviesPage/>
            },
            {
                path: '/found-movies/:movieId', element: <MovieDetailsPage/>
            },
            {
                path: 'top-rated', element: <TopRatedMoviesPage/>
            },
            {
                path: '/top-rated/:movieId', element: <MovieDetailsPage/>
            },
            {
                path: 'upcoming', element: <UpcomingMoviesPage/>
            },
            {
                path: '/upcoming/:movieId', element: <MovieDetailsPage/>
            },
        ]
    }
]);

export { router }