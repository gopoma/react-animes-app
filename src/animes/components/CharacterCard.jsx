import {Link} from "react-router-dom";

export const CharacterCard = ({character}) => {
    return (
        <article className="animate__animated animate__fadeIn w-fit mx-auto bg-slate-200 border-2 border-black p-2 lg:flex lg:gap-2 lg:items-center">
            <div>
                <img
                    src={character.image}
                    alt={character.name} 
                    className="w-56 h-56 mx-auto"
                />
            </div>
            <div className="h-min flex flex-col gap-2">
                <span><b>Anime:</b> {character.anime}</span>
                <span><b>Name:</b> {character.name}</span>
                <span><b>Alias</b> {character.alias}</span>
                <Link
                    to={`/animes/${character.slug}`}
                    className="rounded-sm px-3 py-2 text-white font-bold text-center bg-slate-600 hover:bg-slate-800 transition-colors"
                >
                    Know more...
                </Link>
            </div>
        </article>
    );
};