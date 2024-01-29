import React from 'react';
import logo from './../../img/logo.svg'
import style from './index.module.css'
import Social from "./Social";
import Contacts from "./Contacts";
import Nav from "./Nav";


const Index = () => {
    const menuItems =[
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

            <header className={style.header}>
                <div className={`container ${style.header__container}`}>
                    <Social/>
                    <img src={logo} alt={'Наполеон'}/>
                    <Contacts/>
                    <Nav title={menuItems}/>
                </div>

            </header>


    );
};

export default Index;