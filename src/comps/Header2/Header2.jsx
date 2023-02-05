import React from 'react'
import './Header2.scss'
import { ReactComponent as Logo } from '../../img/logo.svg'
import { ReactComponent as Logopad } from '../../img/logopad.svg'
import { ReactComponent as List2 } from '../../img/list2.svg'
import { ReactComponent as Yphone } from '../../img/Yphone.svg'
import { ReactComponent as Open2 } from '../../img/open2.svg'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Burger from '../Burger/Burger';

function Header2() {
    const [burgerPop, setBurgerPopup] = useState(false);
    return (
        <header className="header black">
            <div className="left">

                <NavLink to="/" className="logo-wrapper black">

                    <Logo className='logo pc' alt="логотип" />
                    <Logopad className=' mob' alt="логотип" />
                    DarVacation
                </NavLink>
                <nav>
                    <ul>
                        <li><NavLink to="/list/buy">Покупка</NavLink>  </li>
                        <li><NavLink to="/">Аренда</NavLink> </li>
                        <li><NavLink to="/">Информация</NavLink> </li>
                        <li><NavLink to="/">Контакты</NavLink> </li>
                    </ul>
                </nav>

            </div>
            <div className="right">
                <button className='lang'>
                    ENG <List2 />
                </button>
                <a className='tel' href="tel:+9715550000111">+971 555 0000 111</a>
                <button className="callback"><Yphone /><span>Заказать звонок</span> </button>
                <button className="callback2">заявка на подбор</button>
            </div>
            <div className="headermob mobf">
                <NavLink to="/" >
                    <div className="logo-wrapper">
                        <Logo className='logo' alt="логотип" />
                        DarVacation
                    </div>
                </NavLink>


                <div className="burger"><button className="callback"><Yphone /></button><button onClick={() => setBurgerPopup(true)} className="open"><Open2 /></button></div>
                <Burger trigger={burgerPop} setTrigger={setBurgerPopup}></Burger>
            </div>

        </header>

    )
}

export default Header2