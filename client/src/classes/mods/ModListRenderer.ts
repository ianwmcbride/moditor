import createElement from "../../functions";
import Mod from "./Mod";

export default class ModListRenderer {

    private thead: HTMLTableSectionElement;

    constructor(columns: string[]) {
        this.thead = this.createTableHeader(columns);
    }

    private createTableHeader(columns: string[]): HTMLTableSectionElement {
        const head = createElement(
            "thead", "", { id: "mod-list-header" }
        ) as HTMLTableSectionElement;
        
        const headRow = createElement(
            "tr", "", { id: "mod-list-header-row" }
        ) as HTMLTableRowElement;
        
        columns.forEach(column => {
            const th = createElement(
                "th", "", { id: `th-${column}`, scope: "col" }
            ) as HTMLTableCellElement;
            th.textContent = column;
            headRow.appendChild(th);
        });

        head.appendChild(headRow);

        return head;
    }

    private createTableBody(mods: Mod[]): HTMLTableSectionElement {
        const body = createElement(
            "tbody", "", { id: "mod-list-body" }
        ) as HTMLTableSectionElement;

        mods.forEach(mod => {
            const row = createElement(
                "tr", "mod-list-row", { id: `mod-${mod.Id}`}
            ) as HTMLTableRowElement;

            const nameCell = createElement(
                "td", "mod-list-cell", { id: `mod-name-${mod.Id}` }
            ) as HTMLTableCellElement;
            nameCell.textContent = mod.name;

            const categoryCell = createElement(
                "td", "mod-list-cell", { id: `mod-category-${mod.Id}` }
            ) as HTMLTableCellElement;
            categoryCell.textContent = mod.category;

            const fomodCell = createElement(
                "td", "mod-list-cell", { id: `mod-fomod-${mod.Id}` }
            ) as HTMLTableCellElement;
            fomodCell.textContent = mod.hasFomod ? "Yes" : "No";

            const loadOrderCell = createElement(
                "td", "mod-list-cell", { id: `mod-loadorder-${mod.Id}` }
            ) as HTMLTableCellElement;
            loadOrderCell.textContent = mod.loadOrder.toString();

            row.appendChild(nameCell);
            row.appendChild(categoryCell);
            row.appendChild(fomodCell);
            row.appendChild(loadOrderCell);

            body.appendChild(row);
        })

        return body;
    }

    public render(mods: Mod[]): HTMLTableElement {

        const table = createElement(
            "table", "", { id: "mod-list" }
        ) as HTMLTableElement;

        table.appendChild(this.thead);
        table.appendChild(this.createTableBody(mods));

        return table;
    }
}