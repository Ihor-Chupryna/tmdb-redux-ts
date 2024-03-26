import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IMovie, IMovieDetails, ITrailer } from "../../interfaces";
import { movieService } from "../../services";

interface IState {
    movies: IMovie[];
    movie: IMovieDetails;
    trailer: ITrailer;
    currentPage: string;
    themeTrigger: boolean;
}

const initialState: IState = {
    movies: [],
    movie: null,
    trailer: null,
    currentPage: '1',
    themeTrigger: false
};

const getAll = createAsyncThunk<{ results: IMovie[] }, { genreId: string, page: string }>(
    'movieSlice/getAll',
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
    'movieSlice/getById',
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


const searchByName = createAsyncThunk<{ results: IMovie[] }, { movieName: string }>(
    'movieSlice/search',
    async ({movieName}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(movieName);
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const getTopRated = createAsyncThunk<{ results: IMovie[] }, { page: string }>(
    'movieSlice/getTopRated',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.topRated(page);
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error)
        }
    }
)

const getUpcoming = createAsyncThunk<{ results: IMovie[] }, { page: string }>(
    'movieSlice/getUpcoming',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.upcoming(page);
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error)
        }
    }
)

const getTrailer = createAsyncThunk<ITrailer, { movieId: string }>(
    'movieSlice/getTrailer',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTrailers(movieId);
            return data.results.find(value => value.type === 'Trailer')
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        movieSetNull: state => {
            state.movie = null
        },
        changeTrigger: (state, actions) => {
            state.themeTrigger = actions.payload
        },
        setCurrentPage: (state, actions) => {
            state.currentPage = actions.payload
        },
        getTrailer: (state, actions) => {
            state.currentPage = actions.payload
        },
        trailerSetNull: state => {
            state.trailer = null
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
                state.movies = action.payload.results
            })
            .addCase(getTopRated.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })
            .addCase(getUpcoming.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })
            .addCase(getTrailer.fulfilled, (state, action) => {
                state.trailer = action.payload
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    searchByName,
    getTrailer,
    getTopRated,
    getUpcoming
}

export { movieReducer, movieActions }