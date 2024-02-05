import React from 'react';
import style from './section1.module.css'
import { Autoplay, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Slider from "./Slider";
import 'swiper/css/autoplay'

const Index = () => {
    const slidItems = [
        {
            id: 1,
            img: '/static/media/1.64b80ca01454c2f54114.jpg'
        }
    ]
    return (
        <div className={style.wrapper}>

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Slider pic={'static/media/2.f03bb0e919477de0cdad.jpg'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider pic={'/static/media/1.64b80ca01454c2f54114.jpg'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider/>
                </SwiperSlide>


            </Swiper>
        </div>

    );
};

export default Index;