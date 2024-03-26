import { apiService } from "./apiService";
import { urls } from "../constants";
import { IResponse } from "../types";
import { IMovie, IMovieDetails, ITrailer } from "../interfaces";

const movieService = {
    getAll: (genreId: string, page: string = '1'): IResponse<{ results: IMovie[] }> => apiService.get(urls.movies.all, {
        params: {
            with_genres: genreId,
            page
        }
    }),
    getById: (id: string): IResponse<IMovieDetails> => apiService.get(urls.movies.byId(id)),
    search: (movieName: string): IResponse<{
        results: IMovie[]
    }> => apiService.get(urls.movies.search, {params: {query: movieName}}),
    topRated: (page: string = '1'): IResponse<{
        results: IMovie[]
    }> => apiService.get(urls.movies.topRated, {params: {page}}),
    upcoming: (page: string = '1'): IResponse<{
        results: IMovie[]
    }> => apiService.get(urls.movies.upcoming, {params: {page}}),
    getTrailers: (movieId: string): IResponse<{ results: ITrailer[] }> => apiService.get(urls.video.trailers(movieId))
}

export { movieService }