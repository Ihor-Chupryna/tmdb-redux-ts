import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
    const search = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    const submit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        navigate('/found-movies', {state: {searchMovie: search.current.value}})
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder={'enter movie'} ref={search}/>
                <button>search</button>
            </form>
        </div>
    );
};

export { SearchMovie };