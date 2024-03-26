import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

import css from './searchMovie.module.css';

const SearchMovie = () => {
    const search = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    const onSubmit = () => {
        const searchMovie = search.current.value
        if (searchMovie !== '' && searchMovie !== ' ') {
            navigate('/found-movies', {state: {searchMovie}})
        }
    }

    return (
        <div>
            <div
                className={css.searchMain}>
                <TextField id="outlined-basic" label="enter movies" variant="outlined" color={'primary'} size={'small'}
                           inputProps={{ref: search}}/>
                <Button variant="outlined" onClick={onSubmit} color={'primary'} size={'medium'}>search</Button>
            </div>

        </div>
    );
};

export { SearchMovie };