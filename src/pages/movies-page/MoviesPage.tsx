import { Genres, Loading, Movies, PaginationBar } from "../../components";
import { useAppSelector } from "../../hooks";

const MoviesPage = () => {
    const pages = 500;
    const {isLoading} = useAppSelector(state => state.loadingReducer);

    return (
        <div>
            {isLoading && <Loading/>}
            <Genres/>
            <Movies/>
            <PaginationBar pages={pages}/>
        </div>
    );
};

export { MoviesPage };