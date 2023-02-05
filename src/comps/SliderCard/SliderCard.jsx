import React from 'react'
import './SliderCard.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SliderCard() {
    return (
        <div className="slidercard card">
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{ clickable: true }}



            >
                <SwiperSlide>
                    <div className="slide">
                        <div className="main">
                            <h2>Burj al Khalifa</h2>
                            <div className="info-wrapper">
                                Застройщик: <b>EMAAR</b>
                                <span>В эксплуатации с 2008 г.</span>
                            </div>
                            <div className="info-description">Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt.
                                Etiam tellus elit, ornare a lorem sed,
                                luctus tincidunt dolor.
                            </div>
                            <div className="price-wrapper">
                                <div className="price">
                                    <div className="slider">
                                        <Swiper
                                            modules={[Navigation]}
                                            spaceBetween={20}
                                            slidesPerView={1}

                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            navigation={{ clickable: true }}


                                        >
                                            <SwiperSlide>Студия</SwiperSlide>
                                            <SwiperSlide>Студия</SwiperSlide>

                                        </Swiper>
                                    </div>
                                    <div className="text">от 250 000 $</div>
                                </div>
                                <div className="a-wrapper">
                                    <a href="">скачать каталог</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className="main">
                            <h2>Burj al Khalifa</h2>
                            <div className="info-wrapper">
                                Застройщик: <b>EMAAR</b>
                                <span>В эксплуатации с 2008 г.</span>
                            </div>
                            <div className="info-description">Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt.
                                Etiam tellus elit, ornare a lorem sed,
                                luctus tincidunt dolor.
                            </div>
                            <div className="price-wrapper">
                                <div className="price">
                                    <div className="slider">
                                        <Swiper
                                            modules={[Navigation]}
                                            spaceBetween={20}
                                            slidesPerView={1}

                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            navigation={{ clickable: true }}


                                        >
                                            <SwiperSlide>Студия</SwiperSlide>
                                            <SwiperSlide>Студия</SwiperSlide>

                                        </Swiper>
                                    </div>
                                    <div className="text">от 250 000 $</div>
                                </div>
                                <div className="a-wrapper">
                                    <a href="">скачать каталог</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="slide">
                        <div className="main">
                            <h2>Burj al Khalifa</h2>
                            <div className="info-wrapper">
                                Застройщик: <b>EMAAR</b>
                                <span>В эксплуатации с 2008 г.</span>
                            </div>
                            <div className="info-description">Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt.
                                Etiam tellus elit, ornare a lorem sed,
                                luctus tincidunt dolor.
                            </div>
                            <div className="price-wrapper">
                                <div className="price">
                                    <div className="slider">
                                        <Swiper
                                            modules={[Navigation]}
                                            spaceBetween={20}
                                            slidesPerView={1}

                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            navigation={{ clickable: true }}


                                        >
                                            <SwiperSlide>Студия</SwiperSlide>
                                            <SwiperSlide>Студия</SwiperSlide>

                                        </Swiper>
                                    </div>
                                    <div className="text">от 250 000 $</div>
                                </div>
                                <div className="a-wrapper">
                                    <a href="">скачать каталог</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    )
}

export default SliderCard