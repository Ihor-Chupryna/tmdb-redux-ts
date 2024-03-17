import { apiService } from "./apiService";
import { urls } from "../constants";
import { IResponse } from "../types";
import { IApiResponse, IMovie, IMovieDetails } from "../interfaces";

const movieService = {
    getAll: (genreId: string, page: string = '1'): IResponse<IApiResponse<IMovie[]>> => apiService.get(urls.movies.all, {
        params: {
            with_genres: genreId,
            page
        }
    }),
    // getAll: (genreId: string, page: string = '1'): IResponse<{results:IMovie[]}> => apiService.get(urls.movies.all, {params: {with_genres: genreId, page}}),

    getById: (id: string): IResponse<IMovieDetails> => apiService.get(urls.movies.byId(id)),
    search: (movieName: string): IResponse<IApiResponse<IMovie[]>> => apiService.get(urls.movies.search, {params: {query: movieName}})
}

export { movieService }