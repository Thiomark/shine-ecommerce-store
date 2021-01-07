import Api from './Api'

export default {
    post(credentials) {
        return Api().post('order/', credentials)
    },
    get(credentials) {
        return Api().get('order/', credentials)
    },
}