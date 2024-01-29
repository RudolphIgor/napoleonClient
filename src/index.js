import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import './styles/reset.css'
import './styles/normalize.css'
import './styles/index.css'
import './fonts/fonts.css'
// import 'https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'

export const Context =createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider
        value={{
        user: new UserStore()
    }}>
        <App />
    </Context.Provider>
);


