import { GAME_COVER_PATH } from "../constants";
import type Mod from "./Mod";

export default class Game
{
    private _id: number;
    private _title: string;
    private _coverSrc: string;
    private _mods: Mod[];
    private _lastScan: Date;

    constructor (
        id: number,
        title: string,
        coverSrc: string = 'default.png',
        mods: Mod[] = [],
        lastScan: Date,
    ) {
        this._id = id;
        this._title = title;
        this._coverSrc = coverSrc;
        this._mods = mods;
        this._lastScan = lastScan;
    }

    public getId(): number
    {
        return this._id;
    }

    public getTitle(): string
    {
        return this._title;
    }

    public getCoverSrc(): string
    {
        return GAME_COVER_PATH + this._coverSrc;
    }

    public getMods(): Mod[]
    {
        return this._mods;
    }

    public getLastScan(): string
    {
        const now = new Date();
        const diffInSecs = Math.abs(now.getTime() - this._lastScan.getTime()) / 1000;

        const SECONDS_IN_DAY = 86400;
        const SECONDS_IN_MONTH = Math.round(SECONDS_IN_DAY * 30);
        const SECONDS_IN_YEAR = Math.round(SECONDS_IN_MONTH * 12);

        if (diffInSecs < 60) 
            return `${diffInSecs} seconds ago`;
        else if (diffInSecs < SECONDS_IN_DAY) 
            return `${Math.floor(diffInSecs / 60)} hours ago` ;
        else if (diffInSecs < SECONDS_IN_MONTH)
            return `${Math.floor(diffInSecs / SECONDS_IN_DAY)} days ago`;
        else if (diffInSecs < SECONDS_IN_YEAR)
            return `${Math.floor(diffInSecs / SECONDS_IN_MONTH)} months ago`;
        else
            return `${Math.floor(diffInSecs / SECONDS_IN_YEAR)} years ago`;
    }

    public getUnscannedMods(): Mod[]
    {
        return this._mods.filter(m => m.scanned);
    }

    public getInvalidMods(): Mod[]
    {
        return this._mods.filter(m => m.isValid === false);
    }

    public updateLastScan(date?: Date): void
    {
        this._lastScan = date ? date : new Date();
    }
}