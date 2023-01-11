import {useMemo} from "react";
import {getCharactersByAnime} from "../helpers";
import {CharacterCard} from "./";

export const CharacterList = ({anime}) => {
    const characters = useMemo(() => getCharactersByAnime(anime), [anime]);

    return (
        <section className="animate__animated animate__fadeIn grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                characters.map(character => (
                    <CharacterCard key={character.id} character={character}/>
                ))
            }
        </section>
    );
};