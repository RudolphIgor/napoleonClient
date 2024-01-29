import React from 'react';
import style from './index.module.css'


const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>Главная</li>
                <li className={style.nav__item}>Каталог</li>
                <li className={style.nav__item}>О нас</li>
                <li className={style.nav__item}>акции</li>
                <li className={style.nav__item}>Отзывы</li>
            </ul>
        </nav>
    );
};

export default Nav;