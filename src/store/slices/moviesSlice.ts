import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IApiResponse, IMovie, IMovieDetails } from "../../interfaces";
import { movieService } from "../../services";

interface IState {
    movies: IMovie[];
    movie: IMovieDetails;
    currentPage: number;
    foundMovies: IMovie[]
}

const initialState: IState = {
    movies: [],
    movie: null,
    currentPage: null,
    foundMovies:[]
};

const getAll = createAsyncThunk<IApiResponse<IMovie[]>, { genreId: string, page: string }>(
    'moviesSlice/getAll',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(genreId, page);
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const getById = createAsyncThunk<IMovieDetails, { movieId: string }>(
    'moviesSlice/getById',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(movieId);
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const searchByName = createAsyncThunk<IApiResponse<IMovie[]>, {movieName:string}>(
    'moviesSlice/search',
    async ({movieName}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(movieName);
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        movieSetNull: state => {
            state.movie = null
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(searchByName.fulfilled, (state, action) => {
                state.foundMovies = action.payload.results
            })
});

const {reducer: movieReducer, actions} = moviesSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    searchByName
}

export { movieReducer, movieActions }