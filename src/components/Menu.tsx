import React, {useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

export default function Menu() {

    const location = useLocation();
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>FoodJ</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={'/'} active={'/' === location.pathname}>Home</Nav.Link>
                        <Nav.Link href={'/ingredients'} active={'/ingredients' === location.pathname}>Ingredients</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}