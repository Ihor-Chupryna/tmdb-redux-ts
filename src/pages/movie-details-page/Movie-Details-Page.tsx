import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { movieActions } from "../../store";
import { MovieDetails } from "../../components";

const MovieDetailsPage = () => {
    const {movieId} = useParams<string>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.movieReducer);
    const {isLoading} = useAppSelector(state => state.loadingReducer);
    console.log(movie)


    useEffect(() => {
        dispatch(movieActions.getById({movieId: movieId}))
    }, [movieId, dispatch]);

    const back = () => {
        navigate(-1)
        dispatch(movieActions.movieSetNull())
    }

    return (
        <div>
            <div>{isLoading && <h1 style={{color: 'red'}}>Loading...</h1>}</div>
            <button onClick={back}>Back</button>
            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export { MovieDetailsPage };