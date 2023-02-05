import React from 'react'
import './LastProjects.scss'
import Project from '../Project/Project'
import { ReactComponent as More } from '../../img/more.svg'
import { NavLink } from 'react-router-dom'

function LastProjects() {
    return (
        <div className="container l">
            <section className="last">
                <h2>Текущие проекты</h2>
                <div className="lastDouble">
                    <Project Image={require("../../img/card1.jpg")} name='Burj al Arab' builder='EMAAR' year='В эксплуатации с 2008 г.' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                    <Project Image={require("../../img/card2.jpg")} name='Burj al Arab' builder='EMAAR' year='В эксплуатации с 2008 г.' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                    <Project Image={require("../../img/card3.jpg")} name='Burj al Arab' builder='EMAAR' year='В эксплуатации с 2008 г.' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                    <Project Image={require("../../img/card4.jpg")} name='Burj al Arab' builder='EMAAR' year='В эксплуатации с 2008 г.' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                    <Project Image={require("../../img/card5.jpg")} name='Burj al Arab' builder='EMAAR' year='В эксплуатации с 2008 г.' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                    <Project Image={require("../../img/card6.jpg")} name='Burj al Arab' builder='EMAAR' year='В эксплуатации с 2008 г.' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                </div>
                <div className="view-link">
                <NavLink to="/list/buy"><More /><span>Посмотреть все</span><span className='grey'>показано 6 из 192</span></NavLink>
                    
                </div>
                
            </section>

        </div>


    )
}

export default LastProjects