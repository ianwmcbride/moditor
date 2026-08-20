import Game from "../classes/Game"

type GameProps = {game: Game};

export default function GameTile({game}: GameProps) {

    const id = game.getId();
    const coverImg = game.getCoverSrc();
    const modsLen = game.getMods().length;
    const title = game.getTitle();

    return (
        <li key={id} id={`game-tile-${id}`} className="game-tile">
            <a href={`/game/${id}/mods`}>
                <img src={coverImg} className="game-tile-cover"/>
                <h4 className="game-tile-mod-count">{modsLen} mods</h4>
                <h3 className="game-tile-title">{title}</h3>
            </a>
        </li>
    )
}