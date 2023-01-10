import {CharacterList} from "../components";

export const BakiPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center p-2">Baki</h1>
            <CharacterList anime="Baki"/>
        </div>
    );
};