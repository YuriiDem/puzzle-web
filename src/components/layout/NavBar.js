import * as React from "react"
import { Link } from "gatsby"



const NavBar = () => (
    <>
        <header>
            <nav className="navbar">
                <h1 className="logo">
                    <Link
                        className="navbar__item"
                        title="Logo"
                        to="/"
                        style={{
                            color: `black`,
                            textDecoration: `none`,
                        }}
                    >
                        Puzzle Group
                    </Link>
                </h1>
                <div className="nav-menu">
                    <Link className="navbar__item" to="/page-2">
                        Портфолио
                    </Link>
                    <Link className="navbar__item" to="/using-ssr">
                        Услуги
                    </Link>
                    <Link className="navbar__item" to="/">
                        О нас
                    </Link>
                    <Link className="navbar__item" to="/">
                        Контакты
                    </Link>
                </div>
            </nav>
        </header>
    </>
)



export default NavBar
