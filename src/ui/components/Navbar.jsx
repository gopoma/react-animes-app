import {useContext} from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../auth";

export const Navbar = () => {
    const {doLogout} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    const onLogout = () => {
        doLogout();
        const lastPath = pathname + search;
        localStorage.setItem("lastPath", lastPath);
        navigate("/auth/login", {replace:true});
    };

    return (
        <nav className="bg-slate-800 p-4 flex gap-3 align-middle">
            <Link 
                to="/animes"
                className="text-2xl text-white font-bold"
            >
                AnimesApp
            </Link>
            <section className="w-full flex justify-between">
                <section className="flex gap-1">
                    <NavLink 
                        to="/animes/baki"
                        className={({isActive}) => `px-4 py-2 rounded-md hover:bg-slate-900 text-white ${(isActive) ? "font-bold" : ""} transition-all`}
                    >
                        Baki
                    </NavLink>
                    <NavLink 
                        to="/animes/opm"
                        className={({isActive}) => `px-4 py-2 rounded-md hover:bg-slate-900 text-white ${(isActive) ? "font-bold" : ""} transition-all`}
                    >
                        One Punch-Man
                    </NavLink>
                    <NavLink 
                        to="/animes/search"
                        className={({isActive}) => `px-4 py-2 rounded-md hover:bg-slate-900 text-white ${(isActive) ? "font-bold" : ""} transition-all`}
                    >
                        Search
                    </NavLink>
                </section>
                <section>
                    <button
                        className="px-4 py-2 rounded-sm text-white font-bold bg-red-700 hover:bg-red-900 transition-colors"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </section>
            </section>
        </nav>
    );
};