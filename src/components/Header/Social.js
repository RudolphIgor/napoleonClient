import React from 'react';
import imgWhatsapp from '../../img/socia/whatsup.svg'
import imgInstagram from '../../img/socia/insta.svg'
import imgTelegram from '../../img/socia/telegram.svg'
import {Link} from "react-router-dom";
import style from './index.module.css'

const Social = () => {
    return (
        <div className={style.social}>

            <Link to="#" target="_blank" rel="noopener noreferrer">
                <img src={imgWhatsapp} alt={'whatsapp'}/>
            </Link>

            <Link to={'#'} rel="nofollow noopener noreferrer" target="_blank"  >
                <img src={imgInstagram} alt={'instagram'}/>
            </Link>

            <Link to={"#"} rel="nofollow noopener noreferrer" target="_blank" >
                <img src={imgTelegram} alt={'telegram'}/>
            </Link>

        </div>
    );
};

export default Social;