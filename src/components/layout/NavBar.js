import * as React from "react"
import { useState } from 'react';
import { Link } from "gatsby"
import './NavBar.css'
import MenuBtn from '../../images/menu-btn.svg'
import NavMenu from "./NavMenu/NavMenu"
// import MenuCloseBtn from '../../../images/menu-close-btn.svg'
import MenuCloseBtn from '../../images/menu-close-btn.svg'
// import tg from "../Footer/img/tg.svg"
// import fb from "../Footer/img/fb.svg"
// import inst from "../Footer/img/inst.svg"
// import be from "../Footer/img/be.svg"


const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <header className="header">
                <div className="logo">
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
                </div>

                <nav className="links">
                    <Link className="links__item" to="/page-2">
                        Портфолио
                    </Link>
                    <Link className="links__item" to="/using-ssr">
                        Услуги
                    </Link>
                    <Link className="links__item" to="/">
                        О нас
                    </Link>
                    <Link className="links__item" to="/">
                        Контакты
                    </Link>
                    <div className="btn__menu">
                        <button type="button" onClick={() => setMenuActive(true)}>
                            <img src={MenuBtn} />
                        </button>
                    </div>
                </nav>
            </header>

            <NavMenu active={menuActive}>
                <div className="nav-menu__header">
                    <div className="logo">
                        <div className="navbar__item">
                            Puzzle Group
                        </div>
                    </div>

                    <div className="nav-menu__menu-close">
                        <div className="btn__menu">
                            <button type="button" onClick={() => setMenuActive(false)}>
                                <img src={MenuCloseBtn} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="nav-menu__list">
                    <ul className="list">
                        <li><Link>интернет-маркетинг</Link></li>
                        <li><Link>дизайн</Link></li>
                        <li><Link>разработка веб-сайтов</Link></li>
                        <li><Link>диджитал</Link></li>
                    </ul>

                    <ul className="list">
                        <li><Link>Портфолио</Link></li>
                        <li><Link>контакты</Link></li>
                        <li><Link>о нас</Link></li>
                    </ul>

                    <div className="nav-menu__list__links">
                    </div>
                </div>
            </NavMenu>
        </>
    );
}



export default NavBar
