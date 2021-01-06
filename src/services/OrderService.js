import Api from './Api'

export default {
    post(credentials) {
        return Api().post('order/', credentials)
    },
}