import {Link, useNavigate} from "react-router-dom";
import React, { MouseEventHandler, useState } from "react";
import { UserContext } from "../context/UserContext";
import { IUser, UserContextType } from "../interfaces/IUser";

export default function Login() {

    const navigate = useNavigate();
    const { user, saveUser } = React.useContext(UserContext) as UserContextType;
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handlerLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (username.length > 0 && password.length > 0) {
            localStorage.setItem('token', '11111');
            const user: IUser = { username: username, isAuth: true };
            saveUser(user)
            navigate('/user');
        }
    }

    return (
        <div className="card">
            <div className="card-header">Iniciar sesión</div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" placeholder="" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="" onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <button type="button" className="btn btn-primary" onClick={handlerLogin}>Entrar</button>
                <Link to={'/register'} className="btn btn-link">¿No tienes cuenta?</Link>
            </div>
        </div>
    )
}