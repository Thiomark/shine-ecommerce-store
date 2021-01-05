import Api from './Api'

export default {
    post(credentials) {
        return Api().post('product/', credentials)
    },
    update(projectId, credentials) {
        return Api().patch(`product/${projectId}`, credentials)
    },
    get(projectId) {
        return Api().get(`product/${projectId}`)
    },
    delete(projectId) {
        return Api().delete(`product/${projectId}`)
    },
    getAll() {
        return Api().get(`product/`)
    }
}