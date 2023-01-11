import {Navigate, Routes, Route} from "react-router-dom";
import {PrivateRoute, PublicRoute} from "./";
import {AuthRoutes} from "../auth";
import {AnimesRoutes} from "../animes";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to="/animes/baki"/>}/>

                <Route path="auth/*" element={
                    <PublicRoute>
                        <AuthRoutes/>
                    </PublicRoute>
                }/>
                <Route path="animes/*" element={
                    <PrivateRoute>
                        <AnimesRoutes/>
                    </PrivateRoute>
                }/>

                <Route path="/*" element={<h1>Not Found</h1>}/>
            </Routes>
        </>
    );
};