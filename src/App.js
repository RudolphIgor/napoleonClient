import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import style from './styles/index.module.css'
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log(user._isAuth)

        check().then( data => {
            console.log(data.data.Result)
            if (data.data.Result === 'OK') {
                console.log('Result is OK')
                user.setUser(true)
                user.setIsAuth(true)
            } else {
                console.log('Result is NO')
            }
        }).finally(() => setLoading(false))
    }, []);

    // if (loading) {
    //     return <div>
    //         Loading
    //     </div>
    // }

    return (
        <BrowserRouter>
            <div className={style.wrapper}>
                <Header/>
                <AppRouter/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
})

export default App;
