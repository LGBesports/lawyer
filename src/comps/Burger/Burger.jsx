import React from 'react'
import './Burger.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Close } from '../../img/close.svg'
import { ReactComponent as Soc1 } from '../../img/soc1.svg'
import { ReactComponent as Soc2 } from '../../img/soc2.svg'
import { ReactComponent as Soc3 } from '../../img/soc3.svg'
import { ReactComponent as Soc4 } from '../../img/soc4.svg'

function Burger(props) {
    return (props.trigger) ? (
        <div className='burger-menu'>
            <div className="burger__top">
                <button onClick={() => props.setTrigger(false)} className='burger-close'><Close /></button>
                <div className="choose">
                    <button>ENG</button>  |  <button>AR</button>
                </div>
                <ul>
                    <li><NavLink to="/list/buy">Покупка</NavLink> </li>
                    <li><NavLink to="/"></NavLink> Аренда</li>
                    <li><NavLink to="/"></NavLink> Информация</li>
                    <li><NavLink to="/"></NavLink> Контакты</li>
                </ul>
                <div className="popbutton">
                    <button>заявка на подбор</button>
                </div>
                <div className="contacts">
                    <a href="tel:+971 555 0000 111" className='tel'>+971 555 0000 111</a>
                    <button>Заказать звонок</button>

                </div>
                <div className="socials">
                    <a href=""><Soc1 /></a>
                    <a href=""><Soc2 /></a>
                    <a href=""><Soc3 /></a>
                    <a href=""><Soc4 /></a>
                </div>
                {props.children}
            </div>
            <div onClick={() => props.setTrigger(false)} className="burger__bottom">
            </div>

        </div>
    ) : "";
}

export default Burger