import React, {useState} from "react";
import {UserContext} from "../../context/UserContext";
import {UserContextType} from "../../interfaces/IUser";
import {useNavigate} from "react-router-dom";
import * as diagnostics_channel from "diagnostics_channel";
import { Nav } from "react-bootstrap";
import UserTabCentro from "./account/UserTabCentro";
import ClubsView from "./clubs/ClubsView";
import TeamsView from "./teams/TeamsView";
import PlayersView from "./players/PlayersView";
import TournamentsView from "./tournament/TournamentsView";

export default function UserView() {
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    const [tabActive, setTabActive] = useState<string>('clubs');
    if (user.isAuth === null) return null
    if (user.isAuth) {
        return (
            <div>
                <UserTabCentro/>
            </div>
        )
    } else {
        return <div className="text-center">Usuario no autentificado</div>
    }
}