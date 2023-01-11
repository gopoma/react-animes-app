import {animes as characters} from "../data/animes";

export const getCharacterBySlug = (slug) => {
    return characters.find(character => character.slug === slug);
};