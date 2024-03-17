import { FC } from "react";

import { IMovie } from "../../../interfaces";
import { urls } from "../../../constants";
import { useNavigate } from "react-router-dom";

interface IProps  {
    movie:IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const  {id,original_title,poster_path,vote_average} = movie;

    return (

            <div onClick={() => navigate(`${id}`)}>
                <div>{original_title}</div>
                <img src={urls.image('300', poster_path)} alt={original_title}/>
                <div>{vote_average}</div>
            </div>

    );
};

export { Movie };