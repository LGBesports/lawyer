import React from 'react'
import './Project2.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper';
import Slider1 from '../../img/slider1.jpg'
import Slider2 from '../../img/slider2.jpg'
import { ReactComponent as Price } from '../../img/price.svg'
import { ReactComponent as Icon1 } from '../../img/icon1.svg'
import { ReactComponent as Icon2 } from '../../img/icon2.svg'
import { ReactComponent as Icon3 } from '../../img/icon3.svg'
import { ReactComponent as Icon4 } from '../../img/icon4.svg'
import { ReactComponent as Icon5 } from '../../img/icon5.svg'
import { ReactComponent as Like } from '../../img/like.svg'
import { NavLink } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Project(props) {
    return (
        <div className="card">
            
                <div className="info-floor"><span>{props.floor}</span></div>
                <div className="info-like"><button><Like /></button></div>
            
            <NavLink to="/id=1/" className=""><Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                pagination={{ clickable: true }}


            >
                <SwiperSlide><img src={Slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={Slider2} alt="" /></SwiperSlide>

            </Swiper></NavLink>

            <div className="card__data">
                <NavLink to="/id=1/" className="">
                    <span>
                        {props.name}
                    </span>
                </NavLink>
                <p>
                    Location: <b> {props.loc}</b> <br />
                    Developer:<b> {props.builder}</b>
                </p>
                <div className="fiat">2 220 000 $ <Price /></div>

            </div>
            <div className="icons">
                <div className="icon"><Icon1 />2021</div>
                <div className="icon iki"><Icon2 />190м2</div>
                <div className="icon"><Icon3 />5</div>
                <div className="icon iki"><Icon4 />4</div>
                <div className="icon"><Icon5 />39</div>
            </div>
        </div>
    )
}

export default Project