import createElement from "../../functions";
import Mod from "./Mod";

export type ColumnDefinition<T, K extends keyof T = keyof T> = 
{
    label: string;
    key: K;
    formatter?: (value: T[K], item: T) => string;
    idPrefix?: string;
};

/**
 * Includes methods to render mod list on screen
 */
export default class ModListUI 
{
    private thead: HTMLTableSectionElement;
    private columns: ColumnDefinition<Mod>[];

    constructor(columns: ColumnDefinition<Mod>[]) 
    {
        this.columns = columns;
        this.thead = this.createTableHeader(columns);
    }

    private createTableHeader(columns: ColumnDefinition<Mod>[]): HTMLTableSectionElement 
    {
        const head = createElement ("thead", "", { id: "mod-list-header" }) as HTMLTableSectionElement;
        
        const headRow = createElement (
            "tr", "", { id: "mod-list-header-row" }
        ) as HTMLTableRowElement;
        
        columns.forEach(column => {
            const th = createElement(
                "th", "", { 
                id: column.idPrefix ? `${column.idPrefix}-header` : `th-${column.label}`, 
                scope: "col" 
            }) as HTMLTableCellElement;
            th.textContent = column.label;
            headRow.appendChild(th);
        });

        head.appendChild(headRow);

        return head;
    }

    private createTableBody(mods: Mod[]): HTMLTableSectionElement 
    {
        const body = createElement("tbody", "", { id: "mod-list-body" }) as HTMLTableSectionElement;

        mods.forEach(mod => 
        {
            // Create table row element
            const row = createElement(
                "tr",
                ["mod-list-row", mod.isValid ? "mod-valid" : "mod-invalid"],
                { id: `mod-${mod.Id}` }
            ) as HTMLTableRowElement;

            this.columns.forEach(col => 
            {
                const cell = createElement(
                    "td",
                    "mod-list-cell",
                    { 
                        id: col.idPrefix ? `${col.idPrefix}-${mod.Id}` : `mod-${String(col.key)}-${mod.Id}` 
                    }
                ) as HTMLTableCellElement;

                const rawValue = mod[col.key];
                cell.textContent = col.formatter 
                    ? col.formatter(rawValue, mod) 
                    : String(rawValue ??"");
                
                row.appendChild(cell);
            });

            body.appendChild(row);
        })

        return body;
    }

    public render(container: HTMLDivElement, mods: Mod[]): HTMLTableElement | HTMLParagraphElement
    {
        container.innerHTML = ""; // Clear existing content

        // Display single message if no mods present
        if (mods.length === 0)
        {
            const p = createElement("p", "", { id: "no-mods-msg" });
            const a = createElement("a", "", { href: "https://www.nexusmods.com/"});
            p.textContent = "I'm useless without mods! Dont worry, ";
            a.textContent = "I know a place...";
            p.appendChild(a);
            return container.appendChild(p) as HTMLParagraphElement;
        }

        const table = createElement("table", "", { id: "mod-list" }) as HTMLTableElement;

        table.appendChild(this.thead);
        table.appendChild(this.createTableBody(mods));

        return table;
    }
}