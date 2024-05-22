import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import MenuVertical from "../components/MenuVertical";

export default function Main() {

    const widthMax = 991;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div>    
            {widthMax >= width && <MenuVertical/> }
            {widthMax < width && <Menu/> }
            <br />
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}