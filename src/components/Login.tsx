import {Link} from "react-router-dom";
import React, {MouseEventHandler, useState} from "react";
import {UserContext} from "../context/UserContext";
import {IUser, UserContextType} from "../interfaces/IUser";

export default function Login() {

    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handlerLogin = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (username.length > 0 && password.length > 0) {
            localStorage.setItem('token', '11111');
            const user: IUser = {username: username, isAuth: true};
            saveUser(user)
        }
    }

    return(
        <div className="row">
            <div className="col-auto"><input type="text" className="form-control" placeholder="Username" onChange={(e)=> {setUsername(e.target.value)}}/></div>
            <div className="col-auto"><input type="password" className="form-control" placeholder="Password" onChange={(e)=> {setPassword(e.target.value)}}/></div>
            <div className="col-auto"><button type="button" className="btn btn-primary" onClick={handlerLogin}>Entrar</button></div>
            <div className="col-auto"><Link to={'/register'} className="btn btn-link">¿No tienes cuenta?</Link></div>
        </div>
    )
}