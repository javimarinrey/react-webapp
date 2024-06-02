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
                                aria-selected="false" onClick={()=>setTabActive('equipos')}><i className="bi bi-shield-shaded"></i> Equipos
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="players-tab" data-bs-toggle="tab"
                                data-bs-target="#players-tab-pane" type="button" role="tab"
                                aria-controls="players-tab-pane" aria-selected="false" onClick={()=>setTabActive('players')}><i className="bi bi-list-ul"></i> Jugadores
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="horarios-tab" data-bs-toggle="tab"
                                data-bs-target="#horarios-tab-pane" type="button" role="tab"
                                aria-controls="horarios-tab-pane" aria-selected="false"><i className="bi bi-clock"></i> Horarios
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="precios-tab" data-bs-toggle="tab"
                                data-bs-target="#precios-tab-pane" type="button" role="tab"
                                aria-controls="precios-tab-pane" aria-selected="false"><i
                            className="bi bi-cash-stack"></i> Precios
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="servicios-tab" data-bs-toggle="tab"
                                data-bs-target="#servicios-tab-pane" type="button" role="tab"
                                aria-controls="servicios-tab-pane" aria-selected="false"><i
                            className="bi bi-ui-checks-grid"></i> Servicios
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
                    <div className="tab-pane fade" id="horarios-tab-pane" role="tabpanel" aria-labelledby="horarios-tab"
                         tabIndex={0}>
                        <br/>
                        Horarios
                    </div>
                    <div className="tab-pane fade" id="precios-tab-pane" role="tabpanel" aria-labelledby="precios-tab"
                         tabIndex={0}>
                        <br/>
                        Precios
                    </div>
                    <div className="tab-pane fade" id="servicios-tab-pane" role="tabpanel" aria-labelledby="servicios-tab"
                         tabIndex={0}>
                        <br/>
                        Servicios
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