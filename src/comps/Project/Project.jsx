import React from 'react'
import './Project.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';

import { ReactComponent as Download } from '../../img/download.svg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Project(props) {
    return (
        <div className="card">
            <div className="left">
                <div className="house"><img src={ props.Image } alt="" /></div>
                <div className="download">
                    <a download href="/">
                        <Download />
                        <p>скачать каталог</p>
                        <span>32.9 mb</span>
                    </a>
                </div>
            </div>
            <div className="right">
                <h3> {props.name}</h3>
                <p>Застройщик: <b>{props.builder} </b><br /><b className='pc'>{props.year}</b></p>
                <span>{props.description}
                </span>
                <div className="price">
                    <div className="slider">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                            pagination={{ clickable: true }}


                        >
                            <SwiperSlide>Студия</SwiperSlide>
                            <SwiperSlide>Студия</SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="text">от 250 000 $</div>
                </div>
                <div className="earn"><span>Доходность в год:</span><b>от 10.2 %</b></div>
            </div>
        </div>
    )
}

export default Project