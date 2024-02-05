import React from 'react';
import style from './index.module.css'
import mainStyle from '../../styles/index.module.css'
import iconName from '../../img/auth/name.svg'
import iconPass from '../../img/auth/pass.svg'

const Index = () => {
    return (
        <div className={mainStyle.container}>
            <div className={style.wrapper}>
                <p className={style.title}>Авторизация</p>
                <form className={style.form}>
                    <div className={style.inputContainer}>
                        <img className={style.icon} src={iconName}/>
                        <div className={style.border}></div>
                        <input className={style.input} type={"text"} name={'name'}/>
                    </div>
                    <div className={style.inputContainer}>
                        <img className={style.icon} src={iconPass}/>
                        <div className={style.border}></div>
                        <input className={style.input} type={"password"} name={'password'}/>
                    </div>
                    <button className={style.button}>Авторизоваться</button>
                </form>
            </div>


        </div>
    );
};

export default Index;