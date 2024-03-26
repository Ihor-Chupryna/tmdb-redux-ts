import { FC, PropsWithChildren } from "react";

import { IGenre } from "../../../interfaces";
import { GenreBadge } from "../genre-badge/GenreBadge";
import css from './genresBadges.module.css';

interface IProps extends PropsWithChildren {
    genres: IGenre[];
}

const GenresBadges: FC<IProps> = ({genres}) => {
    return (
        <div className={css.genresBadgesMain}>
            {genres.map(value => <GenreBadge key={value.id} genre={value}/>)}
        </div>
    );
};

export { GenresBadges };