import {animes as characters} from "../data/animes";

export const getCharactersByName = (name = "") => {
    if(!name.trim()) return [];

    return characters.filter(character => character.name.toLowerCase().trim().includes(name));
};