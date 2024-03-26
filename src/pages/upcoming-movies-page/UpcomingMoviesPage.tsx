import { PaginationBar, UpcomingMovies } from "../../components";

const UpcomingMoviesPage = () => {
    const pages = 43
    return (
        <div>
            <UpcomingMovies/>
            <PaginationBar pages={pages}/>
        </div>
    );
};

export { UpcomingMoviesPage };