import { useParams, redirect } from 'react-router';

import '../index.css';
import '../Mods.css';

import Header from '../components/Header'
import ModListItem from '../components/ModListItem';
import Game from '../classes/Game';

type ModsProps = {
    games: Game[];
}



function Mods({ games }: ModsProps) {
    const { gameId } = useParams();

    const game = games.find((g) => g.getId() == Number(gameId));

    if (game === undefined) throw redirect("/");

    if (game.getMods().length === 0)
    {
        return (
            <>
                <Header />
                <main id="mods">
                    <h2>Looks like you haven't added any mods </h2>
                </main>
            </>
        )
    }

    const TEST_MOD_INDEX = 1;

    return (
        <>
            <Header />
            <main id="mods">
                <h2>- Mod List Manager -</h2>
                <div id="modlist-panels-container">
                    <div className='panel' id='panel-scanner'>
                        <div id='scanner-title'>
                            <h3>{game.getTitle()}</h3>
                            <p>Current Game</p>
                        </div>
                        <div id='scanner-info'>
                            <p>Mods: <span>{game.getMods().length}</span></p>
                            <p>Invalid: <span>{game.getInvalidMods().length}</span></p>
                            <p>Untracked: <span>{game.getUnscannedMods().length}</span></p>
                            <p>Last Scan: <span>{game.getLastScan()}</span></p>
                        </div>
                        <div id='scanner-scanbtn'>
                            <button>Scan <i className="fa-solid fa-rotate"></i></button>
                        </div>
                    </div>
                    <div className='panel' id='panel-modlist'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mod</th>
                                    <th>Category</th>
                                    <th>FOMOD?</th>
                                    <th>Order</th>
                                    <th>Notes?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {game.getMods().map(m => <ModListItem {...m} key={m.Id}/>)}
                            </tbody>
                        </table>
                    </div>
                    <div className='panel' id='panel-moddesc'>
                        <div id='mod-desc-title'>
                            <h4>{game.getMods()[0].name}</h4>
                            <p>{game.getMods()[0].category}</p>
                        </div>
                        <div id='mod-desc-requires'>
                            <p>[Requires]</p>
                            
                        </div>
                        <div id='mod-desc-notes'>
                            <p>[Notes]</p>
                            {game.getMods()[0].notes ?? game.getMods()[0].notes.map(n => (
                                <p className='mod-desc-note'>{n}</p>
                            ))}
                        </div>
                        <div></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Mods;
