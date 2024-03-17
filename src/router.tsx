import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import { FoundMoviesPage, MovieDetailsPage, MoviesPage } from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
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
        ]
    }
]);

export { router }