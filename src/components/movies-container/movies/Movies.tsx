import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { movieActions } from "../../../store";
import { Movie } from "../movie/Movie";
import css from './movies.module.css';

const Movies = () => {
    const {movies, currentPage, themeTrigger} = useAppSelector(state => state.movieReducer);
    const {genreId} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page: currentPage, genreId}))
    }, [genreId, currentPage, dispatch]);

    return (
        <div className={`${css.moviesMain} ${themeTrigger? css.moviesMainLight : css.moviesMainDark}`}>
            {movies.map(value => <Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { Movies };