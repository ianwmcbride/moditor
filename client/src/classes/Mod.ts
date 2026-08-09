export default class Mod {
    ID: number;
    nexusID: string;
    name: string;
    category: string;
    hasFomod: boolean;
    loadOrder: number;
    notes: string;

    constructor(
        ID: number,
        nexusID: string,
        name: string,
        category: string,
        hasFomod: boolean,
        loadOrder: number,
        notes: string
    ) {
        this.ID = ID;
        this.nexusID = nexusID;
        this.name = name;
        this.category = category;
        this.hasFomod = hasFomod;
        this.loadOrder = loadOrder;
        this.notes = notes;
    }

    public render(): void {
        // Render the mod in the UI
    }
}