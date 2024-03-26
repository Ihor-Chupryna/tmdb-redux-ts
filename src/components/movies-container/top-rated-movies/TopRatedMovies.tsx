import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { movieActions } from "../../../store";
import { Movie } from "../movie/Movie";
import css from './topRatedMovies.module.css'

const TopRatedMovies = () => {
    const {movies, currentPage} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getTopRated({page: currentPage}))
    }, [currentPage, dispatch]);

    return (
        <div className={css.topRatedMain}>
            {movies.map(value => <Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { TopRatedMovies };