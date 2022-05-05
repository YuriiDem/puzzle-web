import * as React from "react"
import { useState } from 'react';
import { Link } from "gatsby"
import './NavBar.css'
import MenuBtn from '../../images/menu-btn.svg'
import NavMenu from "./NavMenu/NavMenu"
import MenuCloseBtn from '../../images/menu-close-btn.svg'
import styled from 'styled-components';
// import tg from "../Footer/img/tg.svg"
// import fb from "../Footer/img/fb.svg"
// import inst from "../Footer/img/inst.svg"
// import be from "../Footer/img/be.svg"


const NavBar = () => {
    // const [menuActive, setMenuActive] = useState(false);

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    };

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

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
                        <button type="button" disabled={disabled} onClick={handleClick}>
                            <img src={MenuBtn} />
                        </button>
                    </div>
                </nav>
            </header>

            <NavMenu state={state} >
                <div className="nav-menu__header">
                    <div className="logo">
                        <div className="navbar__item">
                            Puzzle Group
                        </div>
                    </div>

                    <div className="nav-menu__menu-close">
                        <div className="btn__menu">
                            <button type="button">
                                <img src={MenuCloseBtn} onClick={handleClick}/>
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
