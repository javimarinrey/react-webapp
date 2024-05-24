import {Link, useNavigate} from "react-router-dom";
import React, { MouseEventHandler, useState } from "react";
import { UserContext } from "../context/UserContext";
import { IUser, UserContextType } from "../interfaces/IUser";

export default function Register() {

    const navigate = useNavigate();
    const { user, saveUser } = React.useContext(UserContext) as UserContextType;
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handlerRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (username.length > 0 && email.length > 0 && password.length > 0) {

        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" placeholder="" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" placeholder="" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" placeholder="" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary" onClick={handlerRegister}>Registrar</button>
                </div>
            </div>
        </div>
    )
}