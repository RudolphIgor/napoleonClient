import React, {useEffect, useState} from 'react';
import style from './section1.module.css'
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Slider from "./Slider";
import 'swiper/css/autoplay'
import axios from "axios";


const url = 'http://178.208.66.209:3000/api/slides/get/0/0'
const Index = () => {
    const [slides, setSlides] = useState([])
    useEffect(() => {
        axios
            .get(url)
            .then((data) => {
                setSlides(data.data)
            })

    }, []);

    // console.log(slides)
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
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    slides.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Slider slideArray={item}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>

    );
};

export default Index;