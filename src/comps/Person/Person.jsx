import React from 'react'
import './Person.scss'
import { ReactComponent as Mail } from '../../img/mail.svg'
import { ReactComponent as Tel } from '../../img/tel.svg'
import { ReactComponent as Arrow } from '../../img/arrow.svg'



function Person(props) {
    return (
        <div className="card">
            <img src={props.Image} alt="" />
            <div className="card__info">
                <h3>{props.name}</h3>
                <span>{props.job}</span>
                <div className="card__contacts">
                    <a className='mail' href={props.mail}><Mail />{props.mail} </a>
                    <a href={props.tel}><Tel /> {props.tel}</a>

                </div>
                <a className='consult' href="">консультация <Arrow/></a>
            </div>

        </div>
    )
}

export default Person