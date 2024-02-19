import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const login = async (name, password) => {
    const form = new FormData()
    form.append('login', name)
    form.append('password', password)
    const {data} = await $host.post('/api/users/login', form)
    localStorage.setItem('token', data.token)

    return jwtDecode(data.token)
}


export const check = async () => {
    return await $authHost.get('/api/users/auth')
}