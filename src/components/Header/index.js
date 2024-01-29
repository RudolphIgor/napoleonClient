import React from 'react';
import logo from './../../img/logo.svg'
import style from './index.module.css'
import Social from "./Social";
import Contacts from "./Contacts";
import Nav from "./Nav";

const Index = () => {
    return (

            <header className={style.header}>
                <div className={`container ${style.header__container}`}>
                    <Social/>
                    <img src={logo} alt={'Наполеон'}/>
                    <Contacts/>
                    <Nav/>
                </div>

            </header>


    );
};

export default Index;