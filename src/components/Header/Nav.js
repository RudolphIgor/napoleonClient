import React from 'react';
import style from './index.module.css'
import {NavLink} from "react-router-dom";
import {CATALOG_ROUTE} from "../../utils/const";

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                {
                    props.title.map(items =>
                        <NavLink to={items.route}>
                            <li className={style.nav__item} key={items.id}>{items.title}</li>
                        </NavLink>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;