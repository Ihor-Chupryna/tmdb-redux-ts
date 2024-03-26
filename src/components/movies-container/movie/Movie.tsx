import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IMovie } from "../../../interfaces";
import { urls } from "../../../constants";
import css from './movie.module.css';
import { useAppSelector } from "../../../hooks";

interface IProps  {
    movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {themeTrigger} = useAppSelector(state => state.movieReducer);
    const  {id,original_title,poster_path,vote_average} = movie;

    return (
            <div onClick={() => navigate(`${id}`)} className={css.mainMovie}>
                <h3 className={css.vote_average}>{vote_average}</h3>
                <div className={`${css.headerAndImage} ${themeTrigger ? css.mainMovieLight : css.mainMovieDark}`}>
                    <h3>{original_title}</h3>
                    <img src={urls.image('w300', poster_path)} alt={original_title}/>
                </div>
            </div>
    );
};

export { Movie };
