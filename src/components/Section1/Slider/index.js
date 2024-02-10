import React from 'react';
import style from './slider.module.css'
import mainStyle from '../../../styles/index.module.css'

const idImg = 'http://178.208.66.209:3000/api/images/get/'
const Index = (props) => {
    const styleblock = {
        // background: `url(${Image}) center no-repeat`,
        background: `url(${idImg}${props.slideArray.imageid}) center no-repeat`,
        height: '498px',
    }

    return (
        <div style={styleblock} className={style.wrapper}>
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