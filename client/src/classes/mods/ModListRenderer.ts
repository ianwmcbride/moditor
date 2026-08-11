import createElement from "../../functions";
import Mod from "./Mod";

export type ColumnDefinition<T, K extends keyof T = keyof T> = {
    label: string;
    key: K;
    formatter?: (value: T[K], item: T) => string;
    idPrefix?: string;
};

export default class ModListRenderer {

    private thead: HTMLTableSectionElement;
    private columns: ColumnDefinition<Mod>[];

    constructor(columns: ColumnDefinition<Mod>[]) {
        this.columns = columns;
        this.thead = this.createTableHeader(columns);
    }

    private createTableHeader(columns: ColumnDefinition<Mod>[]): HTMLTableSectionElement {
        const head = createElement(
            "thead", "", { id: "mod-list-header" }
        ) as HTMLTableSectionElement;
        
        const headRow = createElement(
            "tr", "", { id: "mod-list-header-row" }
        ) as HTMLTableRowElement;
        
        columns.forEach(column => {
            const th = createElement(
                "th",
                "",
                { id: column.idPrefix ? `${column.idPrefix}-header` : `th-${column.label}`, scope: "col" }
            ) as HTMLTableCellElement;
            th.textContent = column.label;
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
                "tr",
                ["mod-list-row", mod.isValid ? "mod-valid" : "mod-invalid"],
                { id: `mod-${mod.Id}` }
            ) as HTMLTableRowElement;

            this.columns.forEach(column => {
                const cell = createElement(
                    "td",
                    "mod-list-cell",
                    { id: column.idPrefix ? `${column.idPrefix}-${mod.Id}` : `mod-${String(column.key)}-${mod.Id}` }
                ) as HTMLTableCellElement;

                const rawValue = mod[column.key];
                cell.textContent = column.formatter
                    ? column.formatter(rawValue, mod)
                    : String(rawValue ?? "");

                row.appendChild(cell);
            });

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