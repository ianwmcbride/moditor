import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './vars.css';
import './index.css';

import Games from './pages/Games.tsx'
import Mods from './pages/Mods.tsx';
import Mod from './classes/Mod.ts';
import Game from './classes/Game.ts';

    const modsSkyrim = [
        new Mod(1, 72, 1, "SkyMods", "Graphics", true, 1, ["High-resolution textures"]),
        new Mod(2, 823, 1, "BetterAI", "Gameplay", false, 2, ["Smarter NPC behavior"]),
        new Mod(3, 91, 1, "QuestOverhaul", "Content", false, 3, ["Expanded quest lines"]),
        new Mod(4, 1823, 1, "SoundPack", "Audio", true, 4, ["Immersive ambient sounds"]),
        new Mod(5, 123, 1, "FastTravel", "Utility", false, 5, ["Improved fast travel options"]),
        new Mod(6, 12367, 1, "CombatTweaks", "Gameplay", true, 6, ["Balanced combat changes"]),
        new Mod(7, 812, 1, "WeatherFX", "Graphics", false, 7, []),
        new Mod(8, 11, 1, "InventoryPlus", "Utility", true, 8, ["Expanded inventory capacity"]),
        new Mod(9, 420, 1, "NPCOverhaul", "Content", false, 9, ["More varied NPC behaviors"]),
        new Mod(10, 6769, 1, "QuestTracker", "Utility", true, 10, ["Quest tracking improvements"])
    ];

    const modsCP2077 = [
        new Mod(1, 823, 2, "BetterAI", "Gameplay", false, 1, ["Smarter NPC behavior"]),
        new Mod(2, 937, 2, "CombatTweaks", "Gameplay", true, 2, ["Balanced combat changes"]),
        new Mod(3, 1027, 2, "QuestTracker", "Utility", true, 3, ["Quest tracking improvements"])
    ]

    const games: Game[] = [
        new Game(1, 'Skyrim', 'skyrim-square.png', modsSkyrim, new Date('2026-08-18')),
        new Game(2, 'Cyberpunk 2077', 'cyberpunk2077-square.jpg', modsCP2077, new Date('2026-08-19'))
    ]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Games games={games} />} />
            <Route path='/game/:gameId/mods' element={<Mods games={games}/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
