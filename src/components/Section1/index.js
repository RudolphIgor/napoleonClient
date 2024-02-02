import React from 'react';
import style from './section1.module.css'
import { Autoplay, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {Autoplay} from "swiper/modules";

import 'swiper/css';

import 'swiper/css/effect-fade';
import Slider from "./Slider";
import 'swiper/css/autoplay'
const Index = () => {
    return (
        <div className={style.wrapper}>

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 3000,
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
                    <Slider/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider/>
                </SwiperSlide>


            </Swiper>
        </div>

    );
};

export default Index;