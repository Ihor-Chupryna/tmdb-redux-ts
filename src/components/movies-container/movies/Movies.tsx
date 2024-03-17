import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useEffect } from "react";

import { movieActions } from "../../../store";
import { Movie } from "../movie/Movie";


const Movies = () => {
const {movies} = useAppSelector(state => state.movieReducer);
const {isLoading} = useAppSelector(state => state.loadingReducer);
const dispatch = useAppDispatch();

    const genreId = '28'
    const page = '2'

    useEffect(() => {
        dispatch(movieActions.getAll({page:page, genreId:genreId}))
    }, [genreId, page, dispatch]);

    return (
        <div>
            {isLoading && <h1 style={{color:'green'}}>Loading...</h1>}
            {movies.map(value => <Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { Movies };