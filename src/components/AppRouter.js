import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {CATALOG_ROUTE} from "../utils/const";
import Error from "../pages/Error";
import {Context} from "../index";
import style from '../styles/index.module.css'

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user.isAuth)

    return (
        <div className={style.main}>
            <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Route path="*" element={<Error/>}/>
                {/*<Route path="*" element={<Navigate to={CATALOG_ROUTE}/>}/>*/}
            </Routes>
        </div>
    );
};

export default AppRouter;