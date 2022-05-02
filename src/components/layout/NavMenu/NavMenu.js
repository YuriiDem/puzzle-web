import * as React from "react"
// import { Link } from "gatsby"
import { useEffect, useRef } from "react";
import './NavMenu.css'





const NavMenu = ({ state, children }) => {
    let menu = useRef(null);

    useEffect(() => {
        if (state.clicked === false) {
            // menu.style.display = 'none';
            document.getElementsByClassName("nav-menu").style.display = 'none';
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // menu.style.display = 'block';
            document.getElementsByClassName("nav-menu").style.display = 'block';
        }
    });

    return (
        <>
            <div  className="nav-menu">
                {children}
            </div>
        </>
    );
}



export default NavMenu