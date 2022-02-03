import React from "react";
import "./Footer.css"
import tg from './img/tg.svg';
import fb from "./img/fb.svg"
import inst from "./img/inst.svg"
import be from "./img/be.svg"
import arrow from "./img/arrow.svg"
import { render } from "react-dom";


export default () => {

    function menuOpen(e) {
        let element = null;
        let arrow = null;

        if (e.target.tagName == "P" ||e.target.tagName == "IMG") {
            element = e.target.parentNode.parentNode
        }
        else {
            element = e.target.parentNode
        }

        arrow = element.children[0].children[1];

        if(element.clientHeight <= 50) {
            element.style.height = '200px';
            arrow.style.transform = 'rotate(180deg)'
        }
        else {
            element.style.height = '47px';
            arrow.style.transform = 'rotate(0deg)'
        }  
    }
        return (
            <div className="footer">
                <div className="footer_up">
                    <div className="footer_up_left">
                        <div className="footer_up_left__company">
                            <div className="footer_up_left__company__name bold">
                                <p>PUZZLE GROUP</p>
                            </div>
                            <a href="#" className="footer_up_left__company-button">
                                <p className="bold">ОБСУДИТЬ ПРОЕКТ</p>
                            </a>
                        </div>
                    </div>
                    <div className="footer_up_right">
                        <div className="footer_up__contacts">
                            <div className="footer_menu-button" onClick={menuOpen}>
                                <p className="bold">Контакты</p>
                                <img className="arrow" src={arrow}></img>
                            </div>
                            <p className="bold">+38 (095) 081 37 98</p>
                            <p className="bold">+38 (050) 287 14 17</p>
                            <p className="gray">info.puzzle.groupp@gmail.com</p>
                        </div>
                        <div className="footer_up__puzzle_group" onClick={menuOpen}>
                            <div className="footer_menu-button">
                                <p className="bold">Puzzle Group</p>
                                <img className="arrow" src={arrow}></img>
                            </div>
                            <p><a href="#" className="gray">Услуги</a></p>
                            <p><a href="#" className="gray">Портфолио</a></p>
                            <p><a href="#" className="gray">О нас</a></p>
                            <p><a href="#" className="gray">Контакты</a></p>
                        </div>
                        <div className="footer_up__services">
                            <div className="footer_menu-button" onClick={menuOpen}>
                                <p className="bold">Услуги</p>
                                <img className="arrow" src={arrow}></img>
                            </div>
                            <p><a href="#" className="gray">Интернет-маркетинг</a></p>
                            <p><a href="#" className="gray">Дизайн</a></p>
                            <p><a href="#" className="gray">Разработка веб-сайтов</a></p>
                            <p><a href="#" className="gray">Диджитал</a></p>
                        </div>
                    </div>
                </div>
                <div className="footer_down">
                    <div className="footer_down_left bold">
                        <p>Мы соберем ваш бизнес в онлайне!</p>
                    </div>
                    <div className="footer_down_right">
                        <img src={tg} />
                        <img src={inst} />
                        <img src={fb} />
                        <img src={be} />
                    </div>
                </div>
                <div className="footer_puzzle_copyright">
                    <p>©{new Date().getFullYear()} PuzzleGroup. Все права защищены.</p>
                    <p><a href="#">Правила пользования</a></p>
                    <p><a href="#">Политика конфиденциальности</a></p>
                </div>
            </div>
            )
    }