import React from 'react'
import { NavLink } from 'react-router-dom'
import './ItemInfo.scss'
import { ReactComponent as Arrowback } from '../../img/arrow-back.svg'
// import Gallery from '../../img/gallery.png'
import exp1 from '../../img/exp1.svg'
import exp2 from '../../img/exp2.svg'
import exp3 from '../../img/exp3.svg'
import exp4 from '../../img/exp4.svg'
import exp5 from '../../img/exp5.svg'
import exp6 from '../../img/exp6.svg'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Gall from '../Gallery/Gallery'

import { ReactComponent as Bot } from '../../img/bot.svg'
import face from '../../img/face.jpg'
import { ReactComponent as Mail } from '../../img/mail.svg'
import { ReactComponent as Tel } from '../../img/tel.svg'
import Phone from '../Phone/Phone'


function ItemInfo() {
    const [value2, onChange] = useState(new Date());
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    const [isActive2, setIsActive2] = useState(false);
    const handleClick2 = event => {
        // 👇️ toggle isActive state on click
        setIsActive2(current => !current);
    };
    const [isActive3, setIsActive3] = useState(false);
    const handleClick3 = event => {
        // 👇️ toggle isActive state on click
        setIsActive3(current => !current);
    };
    const [isActive4, setIsActive4] = useState(false);
    const handleClick4 = event => {
        // 👇️ toggle isActive state on click
        setIsActive4(current => !current);
    };
    
    return (
        <div className="iteminfo-wrapper">
            <div className="container">


                <div className="iteminfo">

                    <div className="iteminfo__top">
                        <div className="iteminfo__left">
                            <NavLink to="/list/buy"><Arrowback /></NavLink> <h1>Студия в Belgravia Heights II</h1>
                        </div>
                        <div className="iteminfo__right"><span>ID – VC92832</span><h2>3 290 000 $</h2></div>
                    </div>
                    <div className="iteminfo__bottom">
                        <div className="imgs mob1000">
                            <img src="https://kontra-banda.ru/preview.jpg" alt="" />
                            <img src="https://kontra-banda.ru/preview.jpg" alt="" />
                            <img src="https://kontra-banda.ru/preview.jpg" alt="" />
                        </div>
                        <div className="gall-wrapper">
                            
                            <Gall />

                        </div>

                        <div className="grey"></div>
                        <div className="iteminfo__data">
                            <div className="little">Район</div>
                            <div className="name">JVC - Jumeirah Village Circle, Dubai
                            </div>
                            <div className="line"></div>
                            <div className="data-list">
                                <div className="data-item">
                                    Проект <span>Belgravia Heights II</span>
                                </div>
                                <div className="data-item">
                                    Застройщик <span>Ellington Properties</span>
                                </div>
                                <div className="data-item">
                                    Площадь <span>50м2</span>
                                </div>
                                <div className="data-item">
                                    Цена за м² <span>2 900 $</span>
                                </div>
                                <div className="data-item">
                                    Этажность <span>18</span>
                                </div>
                                <div className="data-item">
                                    Ванн <span>2</span>
                                </div>
                                <div className="data-item last">
                                    Мебель <span>Нет</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mdetails ">
                <div onClick={handleClick} id={isActive ? 'opened' : 'closed'} className="mdetails__item">
                    <div className="container">
                        <div className="mdetails-wrapper">
                            Описание <button ><Bot className='closed' /></button>
                        </div>

                    </div>
                    <div className="details__main">
                        <div className="container">
                            <h3>Удобства</h3>

                            <div className="details2-wrapper">
                                <div className="details2__item"><img src={exp1} alt="" />Фитнес - центр</div>
                                <div className="details2__item"><img src={exp2} alt="" />Спа - салон</div>
                                <div className="details2__item"><img src={exp3} alt="" />Казино</div>
                                <div className="details2__item"><img src={exp4} alt="" />Интернет</div>
                                <div className="details2__item"><img src={exp5} alt="" />Бассейн</div>
                                <div className="details2__item"><img src={exp6} alt="" />Кабельное ТВ</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div onClick={handleClick2} id={isActive2 ? 'opened' : 'closed'} className="mdetails__item">
                    <div className="container">
                        <div className="mdetails-wrapper">
                            Удобства <button ><Bot className='closed' /></button>
                        </div>

                    </div>
                    <div className="details__main">
                        <div className="container">
                            <h3>Удобства</h3>

                            <div className="details2-wrapper">
                                <div className="details2__item"><img src={exp1} alt="" />Фитнес - центр</div>
                                <div className="details2__item"><img src={exp2} alt="" />Спа - салон</div>
                                <div className="details2__item"><img src={exp3} alt="" />Казино</div>
                                <div className="details2__item"><img src={exp4} alt="" />Интернет</div>
                                <div className="details2__item"><img src={exp5} alt="" />Бассейн</div>
                                <div className="details2__item"><img src={exp6} alt="" />Кабельное ТВ</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div onClick={handleClick3} id={isActive3 ? 'opened' : 'closed'} className="mdetails__item">
                    <div className="container">
                        <div className="mdetails-wrapper">
                            О проекте <button ><Bot className='closed' /></button>
                        </div>

                    </div>
                    <div className="details__main">
                        <div className="container">
                            <h3>Удобства</h3>

                            <div className="details2-wrapper">
                                <div className="details2__item"><img src={exp1} alt="" />Фитнес - центр</div>
                                <div className="details2__item"><img src={exp2} alt="" />Спа - салон</div>
                                <div className="details2__item"><img src={exp3} alt="" />Казино</div>
                                <div className="details2__item"><img src={exp4} alt="" />Интернет</div>
                                <div className="details2__item"><img src={exp5} alt="" />Бассейн</div>
                                <div className="details2__item"><img src={exp6} alt="" />Кабельное ТВ</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div onClick={handleClick4} id={isActive4 ? 'opened' : 'closed'} className="mdetails__item">
                    <div className="container">
                        <div className="mdetails-wrapper">
                            Карта <button ><Bot className='closed' /></button>
                        </div>

                    </div>
                    <div className="details__main">
                        <div className="container">
                            <h3>Удобства</h3>

                            <div className="details2-wrapper">
                                <div className="details2__item"><img src={exp1} alt="" />Фитнес - центр</div>
                                <div className="details2__item"><img src={exp2} alt="" />Спа - салон</div>
                                <div className="details2__item"><img src={exp3} alt="" />Казино</div>
                                <div className="details2__item"><img src={exp4} alt="" />Интернет</div>
                                <div className="details2__item"><img src={exp5} alt="" />Бассейн</div>
                                <div className="details2__item"><img src={exp6} alt="" />Кабельное ТВ</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="details-wrapper">
                <div className="container">
                    <div className="details">
                        <div className="top">

                            <div className="details__left">
                                <nav>
                                    <ul>
                                        <li><NavLink to="/id=1/">Описание</NavLink></li>
                                        <li><NavLink to="/id=1/2">Удобства</NavLink></li>
                                        <li><NavLink to="/id=1/3">О проекте</NavLink></li>
                                        <li><NavLink to="/id=1/4">Карта</NavLink></li>
                                    </ul>
                                </nav>
                                <div className="details__main">
                                    <h3>Удобства</h3>

                                    <div className="details2-wrapper">
                                        <div className="details2__item"><img src={exp1} alt="" />Фитнес - центр</div>
                                        <div className="details2__item"><img src={exp2} alt="" />Спа - салон</div>
                                        <div className="details2__item"><img src={exp3} alt="" />Казино</div>
                                        <div className="details2__item"><img src={exp4} alt="" />Интернет</div>
                                        <div className="details2__item"><img src={exp5} alt="" />Бассейн</div>
                                        <div className="details2__item"><img src={exp6} alt="" />Кабельное ТВ</div>
                                    </div>
                                </div>

                            </div>
                            <div className="form">
                                <div className="form__title">Записаться на просмотр</div>
                                <div className="form__wrapper">
                                    <div className="form__calendar">
                                        <Calendar onChange={onChange} value={value2} />
                                    </div>
                                    <div className="form__data">
                                        <input placeholder='Ваше Имя' type="text" />

                                        <Phone />
                                        <input placeholder='Email' type="text" name="" id="" />
                                        <textarea placeholder='Комментарий'></textarea>
                                        <div className="policy">Нажимая кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с <a href="">политикой конфиденциальности</a>.
                                        </div>
                                        <button>Записаться</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="bottom">
                            <div className="manager">
                                <div className="manager__like">
                                    <span>Понравилась <br />
                                        квартира?</span>
                                    <h4>Оставьте заявку и наш эксперт <br />
                                        скоро свяжется с вами</h4>
                                    <button>Оставить заявку</button>
                                </div>
                                <div className="line"></div>
                                <div className="person">
                                    <div className="img">
                                        <img src={face} alt="" />
                                        <h3 className='mob1'>Бочаров <br />
                                            Константин</h3>
                                    </div>

                                    <div className="text">
                                        <h3 className='pc1'>Бочаров <br />
                                            Константин</h3>
                                        <div className="lang">Сертифицированный брокер <br />
                                            Языки: <span>Рус, Eng, Укр</span></div>
                                        <div className="contacts">
                                            <div className="item"><Mail />kostyabochka@gmail.com</div>
                                            <div className="item"><Tel />+971 6242 23 32</div>
                                        </div>
                                        <button>консультация</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="details__rigth"></div>
            </div>
        </div>

    )
}

export default ItemInfo