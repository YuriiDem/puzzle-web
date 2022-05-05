import * as React from "react"

import NavBar from './NavBar'
// import Footer from './Footer'
import Footer from './Footer/Footer'
import '../../styles/app.css'


const Layout = ({ children }) => {

    return (
        <>
            <NavBar />
            <main className="container">{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;