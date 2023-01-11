import {useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getCharacterBySlug} from "../helpers";

export const AnimePage = () => {
    const {slug} = useParams();
    const character = useMemo(() => getCharacterBySlug(slug), [slug]);

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    };

    return (
        <section className="container mx-auto grid gap-2 grid-cols-1 lg:grid-cols-2 lg:items-center">
            <section>
                <h1 className="text-4xl font-bold text-center p-4">AnimePage</h1>
                <img 
                    src={character.image} 
                    alt={character.name} 
                    className="animate__animated animate__fadeInLeft w-[28rem] h-[28rem] mx-auto border-4 border-black rounded-sm"
                />
            </section>
            <section className="p-2 flex flex-col">
                <h4 className="text-3xl font-bold my-4">{character.name}</h4>
                <span className="text-2xl ml-6"><b>Anime:</b> {character.anime}</span>
                <hr className="h-px my-2 bg-gray-300 border-0"/>
                <span className="text-2xl ml-6"><b>Alias:</b> {character.alias}</span>
                <hr className="h-px my-2 bg-gray-300 border-0"/>
                <span className="text-2xl ml-6"><b>Gender:</b> {character.gender}</span>
                <hr className="h-px my-2 bg-gray-300 border-0"/>
                <span className="text-2xl ml-6"><b>Alive:</b> {character.alive ? "Yes" : "No"}</span>
                <hr className="h-px my-2 bg-gray-300 border-0"/>
                <button
                    className="rounded-sm p-2 text-xl text-white font-bold bg-slate-600 hover:bg-slate-800 transition-colors"
                    onClick={onNavigateBack}
                >
                    Go back
                </button>
            </section>
        </section>
    )
};