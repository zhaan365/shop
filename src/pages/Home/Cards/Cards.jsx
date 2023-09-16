import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import img from '../../../assets/products/iphone3.jpeg'
import img2 from '../../../assets/products/samsung1.png'
import img3 from '../../../assets/products/mi1.jpg'
import img4 from '../../../assets/products/samsung4.jpg'
import img5 from '../../../assets/products/mi3.jpg'
import img6 from '../../../assets/products/samsung2.jpg'
import img7 from '../../../assets/products/iphone5.jpeg'
import img8 from '../../../assets/products/mi2.jpg'
import img9 from '../../../assets/products/iphone4.jpeg'



const Cards = () => {
    return (
        <section className="swiper65">
            <div className="container">
                <Swiper
                    autoplay={
                        {delay: 2000}
                    }
                    speed={500}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img} alt=""/>
                            <h2 className="swiper65__slide-title">
                                Iphone 13 pro max
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img2} alt=""/>
                            <h2 className="swiper65__slide-title">
                                Samsung s23 ultra
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img3} alt=""/>
                            <h2 className="swiper65__slide-title">
                                REDMI NOTE 11 PRO +
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img4} alt=""/>
                            <h2 className="swiper65__slide-title">
                                Samsung s20 ultra
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img5} alt=""/>
                            <h2 className="swiper65__slide-title">
                                REDMI NOTE 12 PRO +
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img6} alt=""/>
                            <h2 className="swiper65__slide-title">
                                Samsung s22 ultra
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img7} alt=""/>
                            <h2 className="swiper65__slide-title">
                                Iphone Xs Max
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img8} alt=""/>
                            <h2 className="swiper65__slide-title">
                                REDMI NOTE 11 PRO
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper65__slide">

                        <div className="swiper65__slide-card">
                            <img className="swiper65__slide-img" src={img9} alt=""/>
                            <h2 className="swiper65__slide-title">
                                Iphone 12 pro max
                            </h2>
                        </div>
                    </SwiperSlide>


                    {/*<SwiperSlide className="swiper65__slide">Slide 2</SwiperSlide>*/}
                    {/*<SwiperSlide className="swiper65__slide">Slide 3</SwiperSlide>*/}
                    {/*<SwiperSlide className="swiper65__slide">Slide 4</SwiperSlide>*/}
                    {/*<SwiperSlide className="swiper65__slide">Slide 5</SwiperSlide>*/}
                    {/*<SwiperSlide className="swiper65__slide">Slide 6</SwiperSlide>*/}
                    {/*<SwiperSlide className="swiper65__slide">Slide 7</SwiperSlide>*/}
                    {/*<SwiperSlide className="swiper65__slide">Slide 8</SwiperSlide>*/}
                    {/*<SwiperSlide className="swiper65__slide">Slide 9</SwiperSlide>*/}
                </Swiper>
            </div>
        </section>
    );
};

export default Cards;