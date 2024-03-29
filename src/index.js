import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import style from './styles/index.module.css'
import './styles/reset.css'
import './styles/normalize.css'
import './styles/main.css'
import './fonts/fonts.css'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider
        value={{
            user: new UserStore()
        }}>
        <App/>
    </Context.Provider>
);


