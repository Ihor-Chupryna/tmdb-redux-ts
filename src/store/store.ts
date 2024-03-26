import { configureStore } from "@reduxjs/toolkit";

import { genreReducer, loadingReducer, movieReducer } from "./slices";

const store = configureStore({
    reducer: {
        movieReducer,
        loadingReducer,
        genreReducer
    }
});

export { store }