export type Compatibility = 
{
    modId: number;
    isCompatible: boolean;
    patch?: string;
}

export default class Mod
{
    Id: number;
    nexusId: number;
    gameId: number;
    name: string;
    category: string;
    hasFomod: boolean;
    loadOrder: number;
    notes: string[];
    isValid: boolean;
    scanned: boolean;
    compatibility?: Compatibility;
    requires: Mod[] = [];
    requiredBy: Mod[] = [];

    constructor (
        ID: number,
        nexusId: number,
        gameId: number,
        name: string,
        category: string,
        hasFomod: boolean,
        loadOrder: number,
        notes: string[],
        isValid: boolean = true,
        scanned: boolean = false
    ) 
    {
        this.Id = ID;
        this.nexusId = nexusId;
        this.gameId = gameId;
        this.name = name;
        this.category = category;
        this.hasFomod = hasFomod;
        this.loadOrder = loadOrder;
        this.notes = notes;
        this.isValid = isValid;
        this.scanned = scanned;
    }
}