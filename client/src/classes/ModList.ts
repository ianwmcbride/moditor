import Mod from "./Mod";

export default class ModList {

    mods: Mod[] = [];

    public add(mod: Mod): void {
        this.mods.push(mod);
    }

    public remove(modID: number): void {
        this.mods = this.mods.filter(m => m.ID !== modID);
    }

    public render(): void {
        // Render the mod list in the UI
    }
}