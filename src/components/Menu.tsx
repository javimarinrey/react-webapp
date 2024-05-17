import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

export default function Menu() {

    const location = useLocation();

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'} active={'/' === location.pathname}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/user'} active={'/user' === location.pathname}>User</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}