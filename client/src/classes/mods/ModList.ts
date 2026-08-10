import createElement from "../../functions";
import Mod from "./Mod";
import ModListRenderer from "./ModListRenderer";

export default class ModList {

    private container: HTMLDivElement;
    private listRenderer: ModListRenderer;

    mods: Mod[] = [
        // Sample mods for demonstration purposes
        new Mod(1, "nexus-001", "SkyMods", "Graphics", true, 1, "High-resolution textures"),
        new Mod(2, "nexus-002", "BetterAI", "Gameplay", false, 2, "Smarter NPC behavior"),
        new Mod(3, "nexus-003", "QuestOverhaul", "Content", false, 3, "Expanded quest lines"),
        new Mod(4, "nexus-004", "SoundPack", "Audio", true, 4, "Immersive ambient sounds"),
        new Mod(5, "nexus-005", "FastTravel", "Utility", false, 5, "Improved fast travel options"),
        new Mod(6, "nexus-006", "CombatTweaks", "Gameplay", true, 6, "Balanced combat changes"),
        new Mod(7, "nexus-007", "WeatherFX", "Graphics", false, 7, "Dynamic weather effects"),
        new Mod(8, "nexus-008", "InventoryPlus", "Utility", true, 8, "Expanded inventory capacity"),
        new Mod(9, "nexus-009", "NPCOverhaul", "Content", false, 9, "More varied NPC behaviors"),
        new Mod(10, "nexus-010", "QuestTracker", "Utility", true, 10, "Quest tracking improvements")
    ];

    constructor(container: HTMLDivElement, renderer: ModListRenderer) {
        this.container = container;
        this.listRenderer = renderer;
    }

    public add(mod: Mod): void {
        this.mods.push(mod);
        this.render();
    }

    public remove(modId: number): void {
        this.mods = this.mods.filter(m => m.Id !== modId);
        this.render();
    }

    public render(): void {
        this.container.innerHTML = ""; // Clear existing content

        if (this.mods.length === 0) {
            const p = createElement("p", "", { id: "no-mods-message" });
            p.textContent = "I'm useless without mods!";
            this.container.appendChild(p);
            return;
        }
        
        this.container.appendChild(this.listRenderer.render(this.mods));

        return;
    }
}