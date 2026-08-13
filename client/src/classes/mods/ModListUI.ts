import element from "../../functions";
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
        const head = element("thead", { id: "mod-list-header"}) as HTMLTableSectionElement;
        const headRow = element("tr", { id: "mod-list-header-row" }) as HTMLTableRowElement;
        
        columns.forEach(c =>
        {
            const th = element("th", {
                id: c.idPrefix ? `${c.idPrefix}-header` : `th-${c.label}`,
                scope: "col"
            }) as HTMLTableCellElement;

            th.textContent = c.label;
            headRow.appendChild(th);
        });

        head.appendChild(headRow);

        return head;
    }

    private createTableBody(mods: Mod[]): HTMLTableSectionElement 
    {
        const body = element("tbody", { id: "mod-list-body" }) as HTMLTableSectionElement;

        mods.forEach(m => 
        {
            const row = element("tr", {
                class: `mod-list-row ${m.isValid ? "mod-valid" : "mod-invalid"}`,
                id: `mod-${m.Id}`
            }) as HTMLTableRowElement

            this.columns.forEach(c => 
            {
                const cell = element("td", {
                    class: "mod-list-cell",
                    id: c.idPrefix ? `${c.idPrefix}-${m.Id}` : `mod-${String(c.key)}-${m.Id}`
                }) as HTMLTableCellElement;

                const rawValue = m[c.key];
                cell.textContent = c.formatter ? c.formatter(rawValue, m) : String(rawValue ??"");

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
            const p = element("p", { id: "no-mods-msg" });
            const a = element("a", { href: "https://www.nexusmods.com/"});
            p.textContent = "I'm useless without mods! Dont worry, ";
            a.textContent = "I know a place...";
            p.appendChild(a);
            return container.appendChild(p) as HTMLParagraphElement;
        }

        const table = element("table", { id: "mod-list" }) as HTMLTableElement;

        table.appendChild(this.thead);
        table.appendChild(this.createTableBody(mods));

        return table;
    }
}