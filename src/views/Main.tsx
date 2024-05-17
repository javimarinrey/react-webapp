import React from "react";
import { Link, Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function Main() {
    return (
        <div>    
            <Menu/>
            <br />
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}