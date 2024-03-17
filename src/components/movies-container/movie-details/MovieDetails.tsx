import { FC, PropsWithChildren } from "react";

import { IMovieDetails } from "../../../interfaces";
import { urls } from "../../../constants";



interface IProps extends PropsWithChildren {
    movie: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {original_title, poster_path} = movie;


    return (
        <div>
            <h1>{original_title}</h1>
            <img src={urls.image('500', poster_path)} alt={original_title}/>
        </div>
    );
};

export { MovieDetails };