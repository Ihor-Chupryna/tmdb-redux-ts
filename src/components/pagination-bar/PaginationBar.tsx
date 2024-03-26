import { FC, PropsWithChildren } from "react";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import { useAppDispatch, useAppSelector } from "../../hooks";
import { movieActions } from "../../store";
import css from './paginationBar.module.css';

interface IProps extends PropsWithChildren {
    pages: number
}

const PaginationBar: FC<IProps> = ({pages}) => {
    const dispatch = useAppDispatch();
    const {themeTrigger} = useAppSelector(state => state.movieReducer);

    return (
        <div className={css.paginationMain}>
            <Stack spacing={2}>
                <Pagination count={pages} color={'primary'} shape="circular" size={'large'}
                            sx={themeTrigger ? {"& .MuiPaginationItem-page": {color: "black"}} : {"& .MuiPaginationItem-page": {color: "snow"}}}
                            onChange={(_, page: number) => dispatch(movieActions.setCurrentPage(page.toString()))}/>
            </Stack>
        </div>
    );
};


export { PaginationBar };