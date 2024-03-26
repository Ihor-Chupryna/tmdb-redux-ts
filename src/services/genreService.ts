import { IResponse } from "../types";
import { IGenre } from "../interfaces";
import { apiService } from "./apiService";
import { urls } from "../constants";

const genreService = {
    getAll: (): IResponse<{ genres: IGenre[] }> => apiService.get(urls.genresList)
}

export { genreService }