import { IMovie } from "./movieInterface";
import { IGenre } from "./genreInterface";

export interface IMovieDetails extends IMovie {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: IGenre[];
    homepage: string;
    overview: string;
    release_date: string;
    runtime: number;
    tagline: string;
    vote_average: number;
}