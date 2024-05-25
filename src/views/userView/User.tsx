import React from "react";
import {UserContext} from "../../context/UserContext";
import {UserContextType} from "../../interfaces/IUser";
import {useNavigate} from "react-router-dom";
import * as diagnostics_channel from "diagnostics_channel";
import { Nav } from "react-bootstrap";
import UserTabCentro from "./UserTabCentro";

export default function UserView() {
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;

    if (user.isAuth === null) return null
    if (user.isAuth) {
        return (
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="datos-centro-tab" data-bs-toggle="tab"
                                data-bs-target="#datos-centro-tab-pane" type="button" role="tab" aria-controls="datos-centro-tab-pane"
                                aria-selected="true"><i className="bi bi-shield-shaded"></i> Centro
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pistas-tab" data-bs-toggle="tab"
                                data-bs-target="#pistas-tab-pane" type="button" role="tab"
                                aria-controls="pistas-tab-pane" aria-selected="false"><i className="bi bi-list-ul"></i> Pistas
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
                    <div className="tab-pane fade show active" id="datos-centro-tab-pane" role="tabpanel"
                         aria-labelledby="datos-centro-tab" tabIndex={0}>
                        <br/>
                        <UserTabCentro/>
                    </div>
                    <div className="tab-pane fade" id="pistas-tab-pane" role="tabpanel" aria-labelledby="pistas-tab"
                         tabIndex={0}>
                        <br/>
                        Pistas
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
                        Mi cuenta
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className="text-center">Usuario no autentificado</div>
    }
}