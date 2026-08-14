import type Mod from "./mods/Mod";
import ModList from "./mods/ModList";
import ModListUI, { type ColumnDefinition } from "./mods/ModListUI";

export default class View
{
    public static Home()
    {

    }

    public static ModList(container: HTMLDivElement)
    {
        const tableColumns: ColumnDefinition<Mod>[] = 
        [
            { 
                label: "Name", 
                key: "name", 
                idPrefix: "th-name" 
            },
            { 
                label: "Category", 
                key: "category", 
                idPrefix: "th-category" 
            },
            { 
                label: "FOMOD?", 
                key: "hasFomod", 
                formatter: (value) => value ? '<i class="fa-solid fa-file-pen"></i>' : "No", 
                idPrefix: "th-fomod" 
            },
            { 
                label: "Order", 
                key: "loadOrder", 
                formatter: (value) => String(value), 
                idPrefix: "th-order" 
            },
            { 
                label: "Notes", 
                key: "notes", 
                idPrefix: "th-notes" 
            }
        ];

        const modlist = new ModList(container, new ModListUI(tableColumns));
        modlist.render();
    }
}