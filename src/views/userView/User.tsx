import React, {useState} from "react";
import {UserContext} from "../../context/UserContext";
import {UserContextType} from "../../interfaces/IUser";
import {useNavigate} from "react-router-dom";
import * as diagnostics_channel from "diagnostics_channel";
import { Nav } from "react-bootstrap";
import UserTabCentro from "./tabs/UserTabCentro";
import TabClubs from "./tabs/tabClubs/TabClubs";
import TabTeams from "./tabs/tabTeams/TabTeams";
import TabPlayers from "./tabs/tabPlayers/TabPlayers";
import TabTournaments from "./tabs/tabTournaments/TabTournaments";

export default function UserView() {
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    const [tabActive, setTabActive] = useState<string>('clubs');
    if (user.isAuth === null) return null
    if (user.isAuth) {
        return (
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="clubs-tab" data-bs-toggle="tab"
                                data-bs-target="#clubs-tab-pane" type="button" role="tab" aria-controls="clubs-tab-pane"
                                aria-selected="true" onClick={()=>setTabActive('clubs')}><i className="bi bi-shield-shaded"></i> Clubs
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="equipos-tab" data-bs-toggle="tab"
                                data-bs-target="#equipos-tab-pane" type="button" role="tab" aria-controls="equipos-tab-pane"
                                aria-selected="false" onClick={()=>setTabActive('equipos')}><i
                            className="bi bi-grid"></i> Equipos
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="players-tab" data-bs-toggle="tab"
                                data-bs-target="#players-tab-pane" type="button" role="tab"
                                aria-controls="players-tab-pane" aria-selected="false" onClick={()=>setTabActive('players')}><i className="bi bi-list-ul"></i> Jugadores
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tournaments-tab" data-bs-toggle="tab"
                                data-bs-target="#tournaments-tab-pane" type="button" role="tab"
                                aria-controls="tournaments-tab-pane" aria-selected="false"><i className="bi bi-trophy-fill"></i> Torneos
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="cuenta-tab" data-bs-toggle="tab"
                                data-bs-target="#cuenta-tab-pane" type="button" role="tab"
                                aria-controls="cuenta-tab-pane" aria-selected="false"><i className="bi bi-gear-fill"></i> Mi cuenta
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="clubs-tab-pane" role="tabpanel"
                         aria-labelledby="clubs-tab" tabIndex={0}>
                        <br/>
                        {tabActive === 'clubs' && <TabClubs/>}
                    </div>
                    <div className="tab-pane fade" id="equipos-tab-pane" role="tabpanel"
                         aria-labelledby="equipos-tab" tabIndex={0}>
                        <br/>
                        {tabActive === 'equipos' && <TabTeams/>}
                    </div>
                    <div className="tab-pane fade" id="players-tab-pane" role="tabpanel" aria-labelledby="players-tab"
                         tabIndex={0}>
                        <br/>
                        {tabActive === 'players' && <TabPlayers/>}
                    </div>
                    <div className="tab-pane fade" id="tournaments-tab-pane" role="tabpanel" aria-labelledby="tournaments-tab"
                         tabIndex={0}>
                        <br/>
                        <TabTournaments/>
                    </div>
                    <div className="tab-pane fade" id="cuenta-tab-pane" role="tabpanel" aria-labelledby="cuenta-tab"
                         tabIndex={0}>
                        <br/>
                        <UserTabCentro/>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className="text-center">Usuario no autentificado</div>
    }
}