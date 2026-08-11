import ModList from "./classes/mods/ModList";
import ModListRenderer, { type ColumnDefinition } from "./classes/mods/ModListRenderer";
import type Mod from "./classes/mods/Mod";

const app = document.getElementById("app");

if (!app) {
    document.body.innerHTML = "<h1>Error: App container not found</h1>";
    throw new Error("App container not found");
}

const tableColumns: ColumnDefinition<Mod>[] = [
    { label: "Name", key: "name", idPrefix: "th-name" },
    { label: "Category", key: "category", idPrefix: "th-category" },
    { label: "FOMOD?", key: "hasFomod", formatter: (value) => value ? "Yes" : "No", idPrefix: "th-fomod" },
    { label: "Order", key: "loadOrder", formatter: (value) => String(value), idPrefix: "th-order" },
    { label: "Notes", key: "notes", idPrefix: "th-notes" }
];
const modList = new ModList(app as HTMLDivElement, new ModListRenderer(tableColumns));

modList.render();