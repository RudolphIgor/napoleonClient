import React from 'react';
import {ReactComponent as Logo} from './../../img/logo.svg'
import styleHeader from './index.module.css'



import Social from "./Social";
import Contacts from "./Contacts";
import Nav from "./Nav";
import {CATALOG_ROUTE, HOME_ROUTE} from "../../utils/const";


const Index = () => {
    //Массив пунктов меню
    const menuItems = [
        {
            id: 1,
            title: "Главная",
            route: HOME_ROUTE
        },
        {
            id: 2,
            title: "Каталог",
            route: CATALOG_ROUTE
        },
        {
            id: 3,
            title: "О нас",
            route: CATALOG_ROUTE
        },
        {
            id: 4,
            title: "Акции",
            route: CATALOG_ROUTE
        },
        {
            id: 5,
            title: "Отзывы",
            route: CATALOG_ROUTE
        },
    ]

    return (

        <header>
            <div className={styleHeader.header__container}>
                <Social/>
                <Logo className={styleHeader.logo} />
                <Contacts/>
                <Nav title={menuItems}/>
            </div>

        </header>


    );
};

export default Index;