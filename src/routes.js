import Admin from "./pages/Admin";
import {ADMIN_ROUTE, AUTH_ROUTE, CATALOG_ROUTE, HOME_ROUTE} from "./utils/const";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    }
]

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: <Auth/>
    },
    {
        path: CATALOG_ROUTE,
        Component: <Catalog/>
    },
    {
        path: HOME_ROUTE,
        Component: <Home/>
    }

]