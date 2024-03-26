import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IGenre } from "../../interfaces";
import { genreService } from "../../services";

interface IState {
    genres: IGenre[];
    genreId: string;
    genreName: string;
}

const getAll = createAsyncThunk<{ genres: IGenre[] }, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const initialState: IState = {
    genres: [],
    genreId: null,
    genreName: null
};

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenreId: (state, actions) => {
            state.genreId = actions.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll
}

export { genreReducer, genreActions }