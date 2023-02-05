import React from 'react'
import './Hot.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Map } from '../../img/map.svg'
import Project2 from '../Project2/Project2'
import { ReactComponent as More } from '../../img/more.svg'


function Hot() {
    return (
        <section className="hot">
            <div className="container l">
                <h2>Горячие предложения</h2>
                <div className="double">
                    <div className="left">
                        <ul>
                            <li className='active'><NavLink  to="/">All Offers</NavLink> </li>
                            <li><NavLink to="/bla">1B/R</NavLink> </li>
                            <li><NavLink to="/bla">2B/R</NavLink> </li>
                            <li><NavLink to="/bla">Villa</NavLink> </li>
                        </ul>
                    </div>
                    <div className="right"><Map />See on map</div>
                </div>
                <div className="hot__wrapper">
                    <div className="lastThree">
                        <Project2 Image={require("../../img/card1.jpg")} floor="9" name='Burj al Arab' builder='CORE Group' loc="Al Dhafra Rd - Madinat Za'id"  description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                        <Project2 Image={require("../../img/card2.jpg")} floor="3" name='Spacious apartment in Dubai Marina, UAE, 5 bedrooms' builder='CORE Group'  description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                        <Project2 Image={require("../../img/card3.jpg")} floor="6" name='Burj al Arab' builder='CORE Group'  description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                    </div>
                    <div className="view-link">
                    <NavLink to="/list/buy"><More /><span>Посмотреть все</span><span className='grey'>показано 6 из 1221</span></NavLink>
                    
                </div>
                </div>
            </div>
        </section>


    )
}

export default Hot