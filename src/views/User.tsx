import React from "react";
import {UserContext} from "../context/UserContext";
import {UserContextType} from "../interfaces/IUser";
import {useNavigate} from "react-router-dom";
import * as diagnostics_channel from "diagnostics_channel";

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
                <div>{JSON.stringify(user)}</div>
                <button className="btn btn-danger" onClick={handlerSignOut}>Cerrar sessión</button>
            </div>
        )
    } else {
        return <div className="text-center">Usuario no autentificado</div>
    }
}