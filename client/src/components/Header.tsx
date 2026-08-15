import type { Crumb } from "../types"
import Breadcrumbs from "./Breadcrumbs"

export default function Header(crumbs: Crumb[]) {
    return (
        <header>
            {crumbs.length > 0 && crumbs.map(c => <a href={c.href}>{c.text}</a>)}
            <div>
                <h1>Moditor</h1>
            </div>
        </header>
    )
}