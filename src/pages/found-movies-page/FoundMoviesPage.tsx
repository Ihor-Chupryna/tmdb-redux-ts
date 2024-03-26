import { useEffect } from "react";

import { movieActions } from "../../store";
import { FoundMovies } from "../../components";
import { useAppDispatch, useAppLocation } from "../../hooks";

const FoundMoviesPage = () => {
    const {state: {searchMovie}} = useAppLocation<{ searchMovie: string }>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.searchByName({movieName: searchMovie}))
    }, [dispatch, searchMovie]);

    return (
        <div>
            <FoundMovies/>
        </div>
    );
};

export { FoundMoviesPage };