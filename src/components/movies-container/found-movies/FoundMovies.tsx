import { useAppSelector } from "../../../hooks";
import { Movie } from "../movie/Movie";

const FoundMovies = () => {
   const {foundMovies} = useAppSelector(state => state.movieReducer);
    console.log(foundMovies)

    return (
        <div>
            {foundMovies.map(value=><Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { FoundMovies };