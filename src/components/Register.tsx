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
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                    <input type="text" className="form-control" placeholder="" onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-envelope-at-fill"></i></span>
                    <input type="email" className="form-control" placeholder="" onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
                    <input type="password" className="form-control" placeholder="" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                </div>
                <div className="d-grid gap-2">
                <button type="button" className="btn btn-primary" onClick={handlerRegister}>Registrar</button>
                </div>
            </div>
        </div>
    )
}