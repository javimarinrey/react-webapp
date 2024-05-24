import React from "react";
import {UserContext} from "../context/UserContext";
import {UserContextType} from "../interfaces/IUser";
import Login from "../components/Login";
import {Col, Row} from "react-bootstrap";
import Register from "../components/Register";

export default function RegisterView() {
    const {user, saveUser} = React.useContext(UserContext) as UserContextType;
    console.log(`Home - User ${JSON.stringify(user)}`);
    return (
        <div className="mt-4">
            <Row className="justify-content-md-center">
                <Col md="4"><Register/></Col>
            </Row>
        </div>
    )
}