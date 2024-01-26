import React from 'react';
import logo from './../../img/logo.svg'
import style from './index.module.css'

const Index = () => {
    return (

            <header className={style.header}>
                <div className={`container ${style.header__container}`}>
                    <div>SOTIAL</div>
                    <img src={logo}/>
                    <div>CONTACTS</div>
                </div>

            </header>


    );
};

export default Index;