import React from "react";
import { UserContext } from "../context/UserContext";
import { UserContextType } from "../interfaces/IUser";
import Login from "../components/Login";

export default function HomeView() {
    const { user, saveUser } = React.useContext(UserContext) as UserContextType;
    console.log(`Home - User ${JSON.stringify(user)}`);
    return (
        <div>
            <div className="row">
                <div className="col">Home</div>
            </div>
        </div>
    )
}