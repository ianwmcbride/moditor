import type { Crumb } from "../types";

export default function Breadcrumbs() {

    const crumbs: Crumb[] = [
        
    ]

    return (
        <div id="crumbs">
            {crumbs.map(c => <a href={c.href}>{c.text}</a>)}
        </div>
    )
}