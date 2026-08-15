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
    notes: string;
    isValid: boolean;
    compatibility?: Compatibility;

    constructor (
        ID: number,
        nexusId: number,
        gameId: number,
        name: string,
        category: string,
        hasFomod: boolean,
        loadOrder: number,
        notes: string,
        isValid: boolean = false
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
    }
}