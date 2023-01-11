import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {useForm} from "../../hooks";
import {getCharactersByName} from "../helpers";
import {CharacterCard} from "../components";

export const SearchPage = () => {
    const location = useLocation();
    const {q = ""} = queryString.parse(location.search);
    const characters = getCharactersByName(q);
    
    const showSearch = q === "";
    const showError = q !== "" && characters.length === 0;

    const {searchText, onInputChange} = useForm({
        searchText: q
    });
    const navigate = useNavigate();
    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/animes/search?q=${searchText.trim()}`);
    };

    return (
        <section className="container mx-auto my-2 flex flex-col gap-2 lg:flex-row lg:justify-center">
            <section className="bg-slate-200 border border-black p-2 flex flex-col gap-2 items-center">
                <h1 className="text-4xl font-bold text-center p-4">Search a Character</h1>
                <form 
                    className="w-11/12 mx-auto flex flex-col gap-2"
                    onSubmit={onSearchSubmit}
                >
                    <input 
                        className="border-2 border-gray-400 rounded-sm p-2"
                        type="text"
                        name="searchText"
                        placeholder="Enter a Character"
                        value={searchText}
                        onChange={onInputChange}
                    />
                    <button
                        className="bg-blue-600 hover:bg-blue-800 transition-colors text-white text-xl font-bold p-2 rounded-sm"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
                <div
                    className="animate__animated animate__fadeIn bg-blue-200 border border-blue-400 rounded-md px-3 py-2 text-blue-800"
                    style={{display: (showSearch) ? "" : "none"}}
                >
                    Search a character
                </div>
                <div
                    className="animate__animated animate__fadeIn bg-red-200 border border-red-400 rounded-md p-2 text-red-600"
                    style={{display: (showError) ? "" : "none"}}
                >
                    No character with {q}
                </div>
            </section>
            <section className="lg:grid lg:grid-cols-2 lg:gap-2">
                {
                    characters.map(character => (
                        <CharacterCard key={character.id} character={character}/>
                    ))
                }
            </section>
        </section>
    );
};