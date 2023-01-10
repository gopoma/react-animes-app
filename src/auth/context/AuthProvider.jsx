import {useReducer} from "react";
import {AuthContext, authReducer} from "./";
import {types} from "../types";

// This function could be async
const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        isLogged: Boolean(user),
        user
    };
};

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const doLogin = (username) => {
        const user = {
            id: "sus",
            username
        };
        const action = {
            type: types.login,
            payload: user
        };
        dispatch(action);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const doLogout = () => {
        const action = {
            type: types.logout
        };
        dispatch(action);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{
            ...authState,
            doLogin,
            doLogout
        }}>
            {children}
        </AuthContext.Provider>
    );
};