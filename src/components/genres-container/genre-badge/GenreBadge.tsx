import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { IGenre } from "../../../interfaces";
import css from './genreBadge.module.css';
import { useAppDispatch } from "../../../hooks";
import { genreActions } from "../../../store";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {id, name} = genre;
    const moviesNavigate = () => {
        dispatch(genreActions.setGenreId(id.toString()))
        navigate('/movies')
    }

    return (
        <div onClick={moviesNavigate} className={css.genreBadge}>
            {name}
        </div>
    );
};

export { GenreBadge };