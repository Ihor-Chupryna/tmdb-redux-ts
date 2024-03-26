import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { movieActions } from "../../store";
import { Loading, MovieDetails } from "../../components";

const MovieDetailsPage = () => {
    const {movieId} = useParams<string>();
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.movieReducer);
    const {isLoading} = useAppSelector(state => state.loadingReducer);

    useEffect(() => {
        dispatch(movieActions.getById({movieId: movieId}))
    }, [movieId, dispatch]);

    return (
        <div>
            <div>{isLoading && <Loading/>}</div>

            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export { MovieDetailsPage };