import * as React from "react"
// import { Link } from "gatsby"
import './NavMenu.css'





const NavMenu = ({ active, children }) => {
    return (
        <>
            <div className={active ? "nav-menu active" : "nav-menu"}>
                {children}
            </div>
        </>
    );
}



export default NavMenu