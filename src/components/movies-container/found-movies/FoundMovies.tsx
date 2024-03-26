import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useAppSelector } from "../../../hooks";
import { Movie } from "../movie/Movie";
import css from './foundMovies.module.css';

const FoundMovies = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const navigate = useNavigate();

    return (
        <div>
            <div className={css.backButton}>
                <button onClick={() => navigate('/movies')}><ArrowBackIcon color={'success'}/></button>
            </div>
            <div className={css.foundMoviesMain}>
                {movies.map(value => <Movie key={value.id} movie={value}/>)}
            </div>
        </div>
    );
};

export { FoundMovies };