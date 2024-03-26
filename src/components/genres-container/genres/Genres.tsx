import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { genreActions } from "../../../store";
import { Genre } from "../genre/Genre";
import css from './genres.module.css';

const Genres = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.genresList}>
            {genres.map(value => <Genre key={value.id} genre={value}/>)}
        </div>
    );
};

export { Genres };