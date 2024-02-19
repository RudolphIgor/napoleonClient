import React, {useContext, useState} from 'react';

import style from './index.module.css'
import mainStyle from '../../styles/index.module.css'
import iconName from '../../img/auth/name.svg'
import iconPass from '../../img/auth/pass.svg'
import {login} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../../utils/const";

const Index = observer(() => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logIn = async (e) => {
        try {
            e.preventDefault()
            let data;
            data = await login(name, password)
            user.setUser(data)
            user.setIsAuth(true)
            console.log(data)
            console.log(user)
            navigate(ADMIN_ROUTE)
            console.log(user._isAuth)

        } catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <div className={mainStyle.container}>
            <div className={style.wrapper}>
                <p className={style.title}>Авторизация</p>
                <form className={style.form}>
                    <div className={style.inputContainer}>
                        <img className={style.icon} src={iconName}/>
                        <div className={style.border}></div>
                        <input
                            className={style.input}
                            type={"text"}
                            name={'name'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <img className={style.icon} src={iconPass}/>
                        <div className={style.border}></div>
                        <input
                            className={style.input}
                            type={"password"}
                            name={'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className={style.button} onClick={logIn}>Авторизоваться</button>
                </form>
            </div>


        </div>
    );
});

export default Index;