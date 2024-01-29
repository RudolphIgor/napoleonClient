import React from 'react';
import style from './index.module.css'

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                {
                    props.title.map(items =>
                        <li className={style.nav__item}>{items.title}</li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;