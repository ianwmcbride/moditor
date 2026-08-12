import ModList from "./classes/mods/ModList";
import ModListUI, { type ColumnDefinition } from "./classes/mods/ModListUI";
import type Mod from "./classes/mods/Mod";
//import Icon from "./classes/Icon";

const app = document.getElementById("app");

if (!app) {
    document.body.innerHTML = "<h1>Error: App container not found</h1>";
    throw new Error("App container not found");
}

const tableColumns: ColumnDefinition<Mod>[] = [
    // { 
    //     label: "Status", 
    //     key: "isValid", 
    //     formatter: (value) => value ? Icon.Checkmark() : Icon.Xmark(),
    //     idPrefix: "th-status" 
    // },
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
        formatter: (value) => value ? "Yes" : "No", 
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

const modList = new ModList(app as HTMLDivElement, new ModListUI(tableColumns));

// For demostration only
if (modList.mods.length > 8) {
    modList.mods[3].isValid = true; 
    modList.mods[6].isValid = true;
}

modList.render();