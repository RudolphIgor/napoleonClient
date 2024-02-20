import React from 'react';
import {logOut} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const Admin = observer (() => {
    return (
        <div>
            ADMIN
            <button
            onClick={logOut}
            >
                Выйти
            </button>
        </div>
    );
});

export default Admin;