import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import style from './styles/index.module.css'


function App() {
  return (
   <BrowserRouter>
        <div className={style.wrapper}>
            <Header/>
            <AppRouter />
            <Footer/>
        </div>
   </BrowserRouter>
  );
}

export default App;
