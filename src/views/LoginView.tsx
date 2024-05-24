import React from "react";
import { UserContext } from "../context/UserContext";
import { UserContextType } from "../interfaces/IUser";
import Login from "../components/Login";
import {Col, Row } from "react-bootstrap";

export default function LoginView() {
    const { user, saveUser } = React.useContext(UserContext) as UserContextType;
    console.log(`Home - User ${JSON.stringify(user)}`);
    return (
        <div className="mt-4">
            <Row className="justify-content-md-center">
                <Col md="4"><Login /></Col>
            </Row>
        </div>
    )
}