import React, {useEffect} from "react";
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {UserContextType} from "../interfaces/IUser";
import {UserContext} from "../context/UserContext";

export default function Menu() {

    const location = useLocation();
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    const navigate = useNavigate();
    const handlerSignOut = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.removeItem('token');
        saveUser({username: '', isAuth: false});
        navigate('/');
    }
    const handlerSignIn = () => {
        navigate('/login');
    }

    console.log(`Menu - User ${JSON.stringify(user)}`);
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'} active={'/' === location.pathname}>Home</Nav.Link>
                        {user.isAuth &&
                            <Nav.Link as={Link} to={'/user'} active={'/user' === location.pathname}><i
                                className="bi bi-person-fill"></i> User</Nav.Link>}
                    </Nav>
                    <Form className="d-flex">
                        {user.isAuth && <Button variant="danger" onClick={handlerSignOut}>Cerrar sessión</Button>}
                        {!user.isAuth && <Button variant="light" onClick={handlerSignIn}><i
                            className="bi bi-person-fill"></i> Iniciar sessión</Button>}
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}