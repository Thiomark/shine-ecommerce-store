import Api from './Api'

export default {
    login(credentials) {
        return Api().post('user/login', credentials)
    },
    register(credentials) {
        return Api().post('user/register', credentials)
    }
}