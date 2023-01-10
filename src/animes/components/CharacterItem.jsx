export const CharacterItem = ({character}) => {
    return (
        <article className="bg-slate-200 border-2 border-black p-2 lg:flex lg:gap-2 lg:items-center">
            <div>
                <img
                    src={character.image}
                    alt={character.name} 
                    className="w-56 h-56"
                />
            </div>
            <div className="h-min flex flex-col gap-2">
                <span><b>Anime:</b> {character.anime}</span>
                <span><b>Name:</b> {character.name}</span>
                <span><b>Alias</b> {character.alias}</span>
                <span><b>Gender:</b> {character.gender}</span>
                <span><b>Alive:</b> {character.alive ? "Yes" : "No"}</span>
            </div>
        </article>
    );
};