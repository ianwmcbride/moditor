import '../index.css';

import Mod from '../classes/Mod'
import Header from '../components/Header'
import ModListItem from '../components/ModListItem';
import type { Crumb } from '../types';

function Mods() {

    console.log(window.location.pathname)

    const crumbs: Crumb[] = []

    const modsArr = [
        // Sample mods for demonstration purposes
        new Mod(1, 72, 1, "SkyMods", "Graphics", true, 1, "High-resolution textures"),
        new Mod(2, 823, 1, "BetterAI", "Gameplay", false, 2, "Smarter NPC behavior"),
        new Mod(3, 91, 1, "QuestOverhaul", "Content", false, 3, "Expanded quest lines"),
        new Mod(4, 1823, 1, "SoundPack", "Audio", true, 4, "Immersive ambient sounds"),
        new Mod(5, 123, 1, "FastTravel", "Utility", false, 5, "Improved fast travel options"),
        new Mod(6, 12367, 1, "CombatTweaks", "Gameplay", true, 6, "Balanced combat changes"),
        new Mod(7, 812, 1, "WeatherFX", "Graphics", false, 7, "Dynamic weather effects"),
        new Mod(8, 11, 1, "InventoryPlus", "Utility", true, 8, "Expanded inventory capacity"),
        new Mod(9, 420, 1, "NPCOverhaul", "Content", false, 9, "More varied NPC behaviors"),
        new Mod(10, 6769, 1, "QuestTracker", "Utility", true, 10, "Quest tracking improvements")
    ];

    return (
        <>
            <Header {...crumbs}/>
            {modsArr.map(m => <ModListItem {...m}/>)}
        </>
    )
}

export default Mods;
