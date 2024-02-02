import React from 'react';
import style from './slider.module.css'
import mainStyle from '../../../styles/index.module.css'
import Image from '../../../img/slider/2.jpg'


const Index = () => {
    const styleblock = {
        background: `url(${Image}) center no-repeat`,
        height: '498px',
    }
    return (
        <div style={styleblock} className={style.wrapper}>
            <div className={`${style.content} ${mainStyle.container}`}>
                <p className={style.title}>
                    Скидка на ковровое покрытие
                </p>
                <button className={style.button}>
                    Заказать звонок
                </button>
            </div>
        </div>
    );
};

export default Index;