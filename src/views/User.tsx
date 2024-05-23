import React from "react";
import {UserContext} from "../context/UserContext";
import {UserContextType} from "../interfaces/IUser";
import {useNavigate} from "react-router-dom";
import * as diagnostics_channel from "diagnostics_channel";
import { Nav } from "react-bootstrap";

export default function UserView() {
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    const navigate = useNavigate();
    const handlerSignOut = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');
        saveUser({username: '', isAuth: false});
        navigate('/');
    }

    if (user.isAuth === null) return null
    if (user.isAuth) {
        return (
            <div>
                <button className="btn btn-danger" onClick={handlerSignOut}>Cerrar sessión</button>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="datos-centro-tab" data-bs-toggle="tab"
                                data-bs-target="#datos-centro-tab-pane" type="button" role="tab" aria-controls="datos-centro-tab-pane"
                                aria-selected="true">Datos del centro
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pistas-tab" data-bs-toggle="tab"
                                data-bs-target="#pistas-tab-pane" type="button" role="tab"
                                aria-controls="pistas-tab-pane" aria-selected="false">Pistas
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="horarios-tab" data-bs-toggle="tab"
                                data-bs-target="#horarios-tab-pane" type="button" role="tab"
                                aria-controls="horarios-tab-pane" aria-selected="false">Horarios / precios
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="servicios-tab" data-bs-toggle="tab"
                                data-bs-target="#servicios-tab-pane" type="button" role="tab"
                                aria-controls="servicios-tab-pane" aria-selected="false">Servicios
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="datos-centro-tab-pane" role="tabpanel"
                         aria-labelledby="datos-centro-tab" tabIndex={0}>
                        <br/>
                        Datos
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
                    <div className="tab-pane fade" id="servicios-tab-pane" role="tabpanel" aria-labelledby="servicios-tab"
                         tabIndex={0}>
                        <br/>
                        Servicios
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className="text-center">Usuario no autentificado</div>
    }
}