import React from 'react'
import Project2 from '../Project2/Project2'
import './Same.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as More } from '../../img/more.svg'
import { ReactComponent as Map } from '../../img/map.svg'
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';


function Same() {
    return (
        <div className="">
            <section className="hot mob1">
                <div className="container l">
                    <h2>Похожие предложения</h2>

                    <div className="hot__wrapper">
                        <div className="lastThree">
                            <Project2 Image={require("../../img/card1.jpg")} floor="9" name='Burj al Arab' builder='CORE Group' loc="Al Dhafra Rd - Madinat Za'id" description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card2.jpg")} floor="3" name='Spacious apartment in Dubai Marina, UAE, 5 bedrooms' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                            <Project2 Image={require("../../img/card3.jpg")} floor="6" name='Burj al Arab' builder='CORE Group' description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' />
                        </div>
                        <div className="view-link">
                        <NavLink to="/list/buy"><More /><span>Посмотреть все</span><span className='grey'>показано 6 из 1221</span></NavLink>

                        </div>
                    </div>
                </div>
            </section>
            <section className="hot solo pc1">
                <div className="container">
                    <i className="icon-arrow-long-right review-swiper-button-next"></i>
                    <i className="icon-arrow-long-left review-swiper-button-prev"></i>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        className='solo'

                        navigation={{
                            nextEl: '.review-swiper-button-next',
                            prevEl: '.review-swiper-button-prev',
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints={{
                            // when window width is >= 640px
                            1400: {
                                
                                slidesPerView: 3,
                            },
                            1000: {
                                
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <SwiperSlide><Project2 Image={require("../../img/card1.jpg")} floor="9" name='Burj al Arab' builder='CORE Group' loc="Al Dhafra Rd - Madinat Za'id" description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' /></SwiperSlide>
                        <SwiperSlide><Project2 Image={require("../../img/card1.jpg")} floor="9" name='Burj al Arab' builder='CORE Group' loc="Al Dhafra Rd - Madinat Za'id" description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' /></SwiperSlide>
                        <SwiperSlide><Project2 Image={require("../../img/card1.jpg")} floor="9" name='Burj al Arab' builder='CORE Group' loc="Al Dhafra Rd - Madinat Za'id" description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' /></SwiperSlide>
                        <SwiperSlide><Project2 Image={require("../../img/card1.jpg")} floor="9" name='Burj al Arab' builder='CORE Group' loc="Al Dhafra Rd - Madinat Za'id" description='Aliquam erat volutpat. Duis feugiat viverra urna bibendum tincidunt. Etiam tellus elit, ornare a lorem sed, luctus tincidunt dolor.' /></SwiperSlide>

                    </Swiper>
                </div>

            </section>
        </div>

    )
}

export default Same