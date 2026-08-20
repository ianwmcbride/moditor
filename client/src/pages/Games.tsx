import '../index.css';
import '../Games.css';

import GameTile from "../components/GameTile"
import Header from "../components/Header"
import Game from '../classes/Game';

type GamesProps = {
    games: Game[];
}

export default function Games({games}: GamesProps) {
    return (
        <>
            <Header />
            <main id="games">
                <h2>- Select Game -</h2>
                <ul id="game-list">
                    {games.map(g => <GameTile game={g} key={g.getId()}/>)}
                </ul>
            </main>
        </>
    )
}