import {animes as characters} from "../data/animes";

export const getCharactersByAnime = (anime) => {
    const validAnimes = ["Baki", "One Punch-Man"];
    if(!validAnimes.includes(anime)) {
        throw new Error(`${anime} is not a valid anime`);
    }

    return characters.filter(character => character.anime.toLowerCase() === anime.toLowerCase());
};