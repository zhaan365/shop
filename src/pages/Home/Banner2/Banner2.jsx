import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip, Autoplay } from 'swiper/modules';

import banner from '../../../assets/banner/banner.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.jpg'
import banner4 from '../../../assets/banner/banner4.png'
import React from "react";
import {Link} from "react-router-dom";


const Banner2 = () => {
    return (
        <section className="banner">
            <div className="container">

                <div className="banner__row">

                    <Swiper
                        autoplay={
                            {delay: 2000}
                        }
                        speed={1000}
                        effect={'flip'}
                        grabCursor={true}
                        modules={[EffectFlip, Autoplay]}
                        className="mySwiper banner__mySwiper"
                    >
                        <SwiperSlide>
                            <img className="banner__img" src={banner}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="banner__img" src={banner2}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="banner__img" src={banner3}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="banner__img" src={banner4}/>
                        </SwiperSlide>
                    </Swiper>

                    <div className="banner__info">
                        <h2 className="banner__info-title">
                            КРУТОЙ ИНТЕРНЕТ <br/>
                            МАГАЗИН <span>"ElaRio"</span>
                        </h2>

                        <p className="banner__info-text">
                            Мы работаем на мировом рынке, <br/>
                            что даёт нашим покупателям <br/>
                            доступ к продукции разных <br/>
                            стран и регионов.
                        </p>

                        <Link className="banner__info-link" to={'/catalog'}>
                            СМОТРЕТЬ КАТАЛОГ
                        </Link>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Banner2;