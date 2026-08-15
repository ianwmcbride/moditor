import GameTile from "../components/GameTile"
import Header from "../components/Header"
import type { Crumb, Game } from "../types"

export default function Games() {
    const games: Game[] = [
        {id: 1, title: "Skyrim", pic: "skyrim-square.png", modCount: 420},
        {id: 2, title: "Cyberpunk 2077", pic: "cyberpunk2077-square.jpg", modCount: 69}
    ]

    return (
        <>
            <Header />
            <ul id="game-list">
                {games.map(g => <GameTile {...g} key={g.id}/>)}
            </ul>
        </>
    )
}