import { Outlet } from "react-router-dom";

import { Header } from "../../components";
import css from './mainLayout.module.css';
import { useAppSelector } from "../../hooks";

const MainLayout = () => {
    const {themeTrigger} = useAppSelector(state => state.movieReducer);
    return (
        <>
            <Header/>
            <div className={`${themeTrigger ? css.mainContentLight : css.mainContentDark}`}>
                <Outlet/>
            </div>
        </>
    );
};

export { MainLayout };