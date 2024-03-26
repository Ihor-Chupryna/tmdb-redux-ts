import { FC, PropsWithChildren, useEffect } from "react";

import { movieActions } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { urls } from "../../../constants";
import css from './movieTrailer.module.css';

interface IProps extends PropsWithChildren {
    movieId: string
}

const MovieTrailer: FC<IProps> = ({movieId}) => {
    const {trailer} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getTrailer({movieId: movieId.toString()}))
    }, [movieId, dispatch]);
    
    return (
        <div>
            {trailer && <div className={css.trailerMain}>
                <p>{`${trailer.name} : ${trailer.size}P`}</p>
                <iframe
                    width="560"
                    height="315"
                    src={urls.video.youTube(trailer.key)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>}
        </div>
    );
};

export { MovieTrailer };