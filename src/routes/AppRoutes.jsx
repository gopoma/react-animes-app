import {Routes, Route} from "react-router-dom";
import {AuthRoutes} from "../auth";
import {AnimesRoutes} from "../animes";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<h1>AnimeApp</h1>}/>

                <Route path="auth/*" element={<AuthRoutes/>}/>
                <Route path="animes/*" element={<AnimesRoutes/>}/>

                <Route path="/*" element={<h1>Not Found</h1>}/>
            </Routes>
        </>
    );
};