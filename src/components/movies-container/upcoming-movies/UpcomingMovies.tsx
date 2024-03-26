import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { movieActions } from "../../../store";
import { Movie } from "../movie/Movie";
import css from './upcoming.module.css';

const UpcomingMovies = () => {
    const {movies, currentPage} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getUpcoming({page: currentPage}))
    }, [currentPage, dispatch]);

    return (
        <div className={css.upcomingStyle}>
            {movies.map(value => <Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { UpcomingMovies };