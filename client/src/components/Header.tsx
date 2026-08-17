import type { Crumb } from "../types"
import Breadcrumbs from "./Breadcrumbs"

export default function Header(crumbs: Crumb[]) {
    return (
        <header>
            {crumbs.length > 0 && crumbs.map(c => <a href={c.href}>{c.text}</a>)}
            <div id="logo-container">
                <h1><a href="/">Moditor</a></h1>
            </div>
        </header>
    )
}