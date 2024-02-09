import React from 'react';
import style from './slider.module.css'
import mainStyle from '../../../styles/index.module.css'
import Image from '../../../img/slider/1.jpg'


const Index = (props) => {
    const styleblock = {
        background: `url(${Image}) center no-repeat`,
        height: '498px',
    }

    return (
        <div  style={styleblock} className={style.wrapper}>
                {/*<p className={style.title}>*/}

                {/*</p>*/}
            <div className={`${style.content} ${mainStyle.container}`}>
                <p className={style.title}>
                    {props.slideArray.text}
                </p>
                <button className={style.button}>
                    {props.slideArray.text_btn}
                </button>
            </div>
        </div>

    );
};

export default Index;