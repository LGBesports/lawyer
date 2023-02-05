import React from 'react'
import { ReactComponent as Home } from '../../img/home.svg'
import { NavLink, Routes } from 'react-router-dom'
import './Nav.scss'


function Nav(props) {
    return (
        <nav className='sitenav'>
            <div className="container">
                <div className="top">
                    <NavLink className="icon" to="/">
                        <Home />
                    </NavLink>
                    <NavLink className="text" to="/">
                        <span>Объекты недвижимости</span>
                    </NavLink>

                    <NavLink  className="text active" to="/list/buy">
                        <span>Новостройки в Дубае</span>
                    </NavLink>
                </div>
                <div className="bottom">
                    {props.dubai}
                </div>
            </div>


        </nav>
    )
}

export default Nav