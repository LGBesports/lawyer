import React from 'react'
import './Footer.scss'
import { ReactComponent as Logo2 } from '../../img/logo2.svg'
import { ReactComponent as Soc1 } from '../../img/soc1.svg'
import { ReactComponent as Soc2 } from '../../img/soc2.svg'
import { ReactComponent as Soc3 } from '../../img/soc3.svg'
import { ReactComponent as Soc4 } from '../../img/soc4.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="line">
                <div className="l"></div>
                <div className="c"><Logo2 /></div>
                <div className="r"></div>
            </div>
            <div className="container">
                <div className="footer">

                    <div className="wrapper">
                        <nav className='pc'><ul>
                            <span className='title'>Купить</span>
                            <li><a href="">Квартиру в Дубае</a></li>
                            <li><a href="">Дом в Дубае</a></li>
                            <li><a href="">Апартаменты в Дубае</a></li>
                            <li><a href="">Лофт в Дубае</a></li>
                            <li><a href="">Пентхаус в Дубае</a></li>
                            <li><a href="">Виллу в Дубае</a></li>
                        </ul>
                        </nav>
                        <nav className='pc'>
                            <ul>
                                <span className='title'>Услуги</span>
                                <li><a href="">Управление недвижимостью</a></li>
                                <li><a href="">Продажа недвижимости</a></li>
                                <li><a href="">Сдать недвижимость</a></li>
                                <li><a href="">Инвестиции в Дубай</a></li>
                                <li><a href="">Переезд в Дубай</a></li>
                                <li><a href="">Гражданство ОАЭ</a></li>
                                <li><a href="">Недвижимость в кредит</a></li>
                            </ul>
                        </nav>
                        <nav className='pc'>
                            <ul>
                                <span className='title'>Информация</span>
                                <li><a href="">Видео</a></li>
                                <li><a href="">Подкасты</a></li>
                                <li><a href="">Законы</a></li>
                                <li><a href="">Вопросы и ответы</a></li>
                                <li><a href="">Книги</a></li>
                                <li><a href="">Инфографика</a></li>
                                <li><a href="">Статьи</a></li>
                            </ul>
                        </nav>

                        <div className="contacts">
                            <span className='title'>Контакты</span>
                            <p>Дубай, ОАЭ, Jumeirah Lakes Towers, Cluster X, <br /> X3 Tower, Offices 310 and 301.</p>
                            <a href="tel:+971 555 0000 111">+971 555 0000 111</a>
                            <button className='back'>Заказать звонок</button>
                            <button className="back2">заявка на подбор</button>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="left">
                            <span>Copyright © 2010-2022 <br className='mob' /> Elite & Luxury Real Estate</span>
                            <nav>
                                <ul>
                                    <li><a href="">Правовая информация</a> </li>
                                    <li><a href="">Защита данных</a> </li>
                                    <li><a href="">Cookies</a> </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <a href=""><Soc1/></a>
                            <a href=""><Soc2/></a>
                            <a href=""><Soc3/></a>
                            <a href=""><Soc4/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer