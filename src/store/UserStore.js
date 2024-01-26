import {makeObservable} from "mobx";
// MobX будет следить за изменениями переменных _isAuth и _user  и при их изменении компоненты будут перерисовываться
export  default class UserStore {
    constructor() {
        this._isAuth = false
        this._user= {}
        makeObservable(this)
    }

    // Экшен, который изменяет состояние
    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}