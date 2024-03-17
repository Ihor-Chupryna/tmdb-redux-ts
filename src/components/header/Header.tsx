import { NavLink } from "react-router-dom";

import css from './header.module.css';
import { SearchMovie } from "../movies-container";

const Header = () => {
    return (
        <div className={css.mainStyle}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'home'}>home</NavLink>
            <SearchMovie/>
        </div>
    );
};

export { Header };