import { PaginationBar, TopRatedMovies } from "../../components";

const TopRatedMoviesPage = () => {
    const pages = 463;

    return (
        <div>
            <TopRatedMovies/>
            <PaginationBar pages={pages}/>
        </div>
    );
};

export { TopRatedMoviesPage };