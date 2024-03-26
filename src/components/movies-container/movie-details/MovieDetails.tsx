import { FC, PropsWithChildren } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Rating } from "@mui/material";

import { IMovieDetails } from "../../../interfaces";
import { urls } from "../../../constants";
import { MovieTrailer } from "../movie-trailer/movieTrailer";
import { movieActions } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import css from './movieDetails.module.css';
import { GenresBadges } from "../../genres-container";

interface IProps extends PropsWithChildren {
    movie: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {
        id,
        original_title,
        poster_path,
        tagline,
        overview,
        runtime,
        budget,
        genres,
        homepage,
        vote_average,
        release_date,
    } = movie;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {themeTrigger} = useAppSelector(state => state.movieReducer);
    const back = () => {
        navigate(-1)
        dispatch(movieActions.movieSetNull())
        dispatch(movieActions.trailerSetNull())
    }

    return (
        <div
            className={`${css.movieDetailsMain} ${themeTrigger ? css.movieDetailsMainLight : css.movieDetailsMainDark}`}>
            <div className={css.backButton}>
                <button onClick={back}><ArrowBackIcon color={'success'}/></button>
            </div>

            <div className={css.mainContent}>
                <div className={`${css.content} ${themeTrigger ? css.contentLight : css.contentDark}`}>
                    <h1>{original_title}</h1>
                    <h2>{tagline}</h2>
                    <h3>{overview}</h3>
                    <MovieTrailer movieId={id.toString()}/>
                    <GenresBadges genres={genres}/>
                    <p>Release Date: {release_date}</p>
                    <p>Homepage: <NavLink to={homepage}>{homepage}</NavLink></p>
                    <p>Duration: {runtime} min</p>
                    <p>Budget: {budget} $</p>
                </div>

                <div>
                    <div className={css.starRating}>
                        <Rating name="read-only" value={vote_average} readOnly max={10}
                                precision={0.25} size={"large"}/>
                    </div>
                    <img src={urls.image('w500', poster_path)} alt={original_title}
                         className={`${themeTrigger ? css.imageLight : css.imageDark}`}/>
                </div>
            </div>

        </div>
    );
};

export { MovieDetails };