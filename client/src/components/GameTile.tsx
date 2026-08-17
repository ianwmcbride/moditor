import type { Game } from "../types";

export default function GameTile(game: Game) {
    return (
        <li key={game.id} id={"game-tile-" + game.id} className="game-tile">
            <a href={"/game/" + game.id + "/mods"}>
                <img src={game.pic} className="game-tile-cover"/>
                <h4 className="game-tile-mod-count">{game.modCount} mods</h4>
                <h3 className="game-tile-title">{game.title}</h3>
            </a>
        </li>
    )
}