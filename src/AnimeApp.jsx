import {AppRoutes} from "./routes";
import {AuthProvider} from "./auth";

export const AnimeApp = () => {
    return (
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>
    );
};