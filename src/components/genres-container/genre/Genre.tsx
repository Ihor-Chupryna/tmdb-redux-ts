import { FC } from "react";
import Button from "@mui/material/Button";

import { IGenre } from "../../../interfaces";
import { useAppDispatch } from "../../../hooks";
import { genreActions } from "../../../store";
import { ButtonGroup } from "@mui/material";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const dispatch = useAppDispatch();

    return (
        <div>
            <ButtonGroup variant="contained" aria-label="Basic button group" size={'large'} color={'success'}>
                <Button onClick={() => dispatch(genreActions.setGenreId(id.toString()))}>{name}</Button>
            </ButtonGroup>
        </div>
    );
};

export { Genre };