import {useLocation, useNavigate} from "react-router-dom";
import React from "react";
import {UserContext} from "../context/UserContext";
import {UserContextType} from "../interfaces/IUser";

export default function MenuVertical() {

    const location = useLocation();
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    const navigate = useNavigate();
    const handlerSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');
        saveUser({username: '', isAuth: false});
        navigate('/');
        navigate(0);
    }
    const handlerSignIn = () => {
        navigate('/login');
        navigate(0);
    }

    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">React-Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">React-Bootstrap</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {user.isAuth &&
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/user" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <i className="bi bi-person-fill"></i> User
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/user/clubs">Clubs</a></li>
                                    <li><a className="dropdown-item" href="/user/teams">Teams</a></li>
                                    <li><a className="dropdown-item" href="/user/players">Players</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/user/tournaments">Tournaments</a></li>
                                    <li><a className="dropdown-item" href="/user/leagues">Leagues</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/user">My Account</a></li>
                                </ul>
                            </li>}
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            {user.isAuth && <button className="btn btn-danger" type="button" onClick={handlerSignOut}>Cerrar sessión</button>}
                            {!user.isAuth && <button className="btn btn-light" type="button" onClick={handlerSignIn}><i className="bi bi-person-fill"></i>Iniciar sessión</button>}
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}