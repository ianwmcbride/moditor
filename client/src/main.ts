import ModList from "./classes/mods/ModList";
import ModListRenderer from "./classes/mods/ModListRenderer";

const app = document.getElementById("app");

if (!app) {
    document.body.innerHTML = "<h1>Error: App container not found</h1>";
    throw new Error("App container not found");
}

const tableColumns = ["Name", "Category", "FOMOD?", "Notes"];
const modList = new ModList(app as HTMLDivElement, new ModListRenderer(tableColumns));

modList.render();