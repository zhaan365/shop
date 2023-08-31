
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



const ProductSlider = ({product}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="product__sliders">
            <Swiper
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide className="product__sliders-slider">
                    <img className="product__sliders-img" src={`/${product.image}`} />
                </SwiperSlide>
                <SwiperSlide className="product__sliders-slider">
                    <img className="product__sliders-img2" src={`/${product.image1}`} />
                </SwiperSlide>
                <SwiperSlide className="product__sliders-slider">
                    <img className="product__sliders-img2" src={`/${product.image2}`} />
                </SwiperSlide>
                <SwiperSlide className="product__sliders-slider">
                    <img className="product__sliders-img2" src={`/${product.image3}`} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                slidesPerView={4}
                navigation={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide className="product__sliders-slider2">
                    <img className="product__sliders-img3" src={`/${product.image}`} />
                </SwiperSlide>
                <SwiperSlide className="product__sliders-slider2">
                    <img className="product__sliders-img3" src={`/${product.image1}`} />
                </SwiperSlide>
                <SwiperSlide className="product__sliders-slider2">
                    <img className="product__sliders-img3" src={`/${product.image2}`} />
                </SwiperSlide>
                <SwiperSlide className="product__sliders-slider2">
                    <img className="product__sliders-img3" src={`/${product.image3}`} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductSlider;