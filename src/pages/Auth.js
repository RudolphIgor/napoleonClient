import React from 'react';
import FormAuth from "../components/FormAuth";
import {login} from "../http/userAPI";

const Auth = () => {

    return (
        <div>
            <FormAuth/>
        </div>
    );
};

export default Auth;