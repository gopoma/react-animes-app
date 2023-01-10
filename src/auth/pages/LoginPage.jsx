import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../auth";

export const LoginPage = () => {
    const {doLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {
        doLogin("Daniel Vela Pérez");
        const lastPath = localStorage.getItem("lastPath") ?? "/animes";
        navigate(lastPath, {replace:true});
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-black text-center p-2">LoginPage</h1>
            <section className="mt-4 flex justify-center">
                <button 
                    className="bg-blue-600 text-xl font-bold text-white px-4 py-2 hover:bg-blue-800 rounded-sm transition-colors"
                    onClick={onLogin}
                >
                    Login
                </button>
            </section>
        </div>
    );
};