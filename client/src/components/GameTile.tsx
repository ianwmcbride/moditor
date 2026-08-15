import type { Game } from "../types";

export default function GameTile(game: Game) {
    return (
        <li key={game.id} id={"game-tile-" + game.id} className="game-tile">
            <img src={game.pic}/>
            <div>
                <p>{game.title}</p>
                <p>{game.modCount} mods</p>
            </div>
        </li>
    )
}