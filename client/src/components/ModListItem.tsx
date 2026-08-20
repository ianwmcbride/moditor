import type Mod from "../classes/Mod";

export default function ModListItem(mod: Mod) {
    return (
        <tr id={"mod-" + mod.Id} key={mod.Id}>
            <td className="mod-list-cell mod-list-name">
                {mod.name}
            </td>
             <td className="mod-list-cell mod-list-category">
                {mod.category}
            </td>
             <td className="mod-list-cell mod-list-fomod">
                {mod.hasFomod ? "Yes" : "No"}
            </td>
             <td className="mod-list-cell mod-list-order">
                {mod.loadOrder}
            </td>
             <td className="mod-list-cell mod-list-notes">
                {mod.notes && "[Note Icon]"}
            </td>
        </tr>
    )
}