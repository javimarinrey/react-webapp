import React from "react";
import {UserContext} from "../context/UserContext";
import {UserContextType} from "../interfaces/IUser";
import {useNavigate} from "react-router-dom";

export default function UserView() {
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    const navigate = useNavigate();
    const handlerSignOut = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');
        saveUser({username: '', isAuth: false});
        navigate('/');
    }

    if (user.isAuth) {
        return (
            <div>
                <div>{JSON.stringify(user)}</div>
                <button className="btn btn-danger" onClick={handlerSignOut}>Cerrar sessión</button>
            </div>
        )
    } else {
        return null
    }
}