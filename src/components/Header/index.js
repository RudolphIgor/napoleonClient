import React from 'react';
import {ReactComponent as Logo} from './../../img/logo.svg'
import styleHeader from './index.module.css'
import style from '../../styles/index.module.css'

import Social from "./Social";
import Contacts from "./Contacts";
import Nav from "./Nav";


const Index = () => {
    //Массив пунктов меню
    const menuItems = [
        {
            id: 1,
            title: "Главная"
        },
        {
            id: 2,
            title: "Каталог"
        },
        {
            id: 3,
            title: "О нас"
        },
        {
            id: 4,
            title: "Акции"
        },
        {
            id: 5,
            title: "Отзывы"
        },
    ]

    return (

        <header className={style.container}>
            <div className={styleHeader.header__container}>
                <Social/>
                <Logo/>
                <Contacts/>
                <Nav title={menuItems}/>
            </div>

        </header>


    );
};

export default Index;