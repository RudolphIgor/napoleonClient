import React from 'react';
import style from './section1.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from "./Slider";
const Index = () => {
    return (
        <div className={style.wrapper}>
            <Slider/>
            {/*<Swiper*/}
            {/*    modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
            {/*    spaceBetween={50}*/}
            {/*    slidesPerView={1}*/}
            {/*    navigation*/}
            {/*    pagination={{ clickable: true }}*/}
            {/*    scrollbar={{ draggable: true }}*/}
            {/*    onSwiper={(swiper) => console.log(swiper)}*/}
            {/*    onSlideChange={() => console.log('slide change')}*/}
            {/*>*/}
            {/*    <SwiperSlide>*/}
            {/*        <Logo/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <Logo/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <Logo/>*/}
            {/*    </SwiperSlide>*/}


            {/*</Swiper>*/}
        </div>

    );
};

export default Index;