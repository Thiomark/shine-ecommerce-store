import Api from './Api'

export default {
    post(credentials) {
        return Api().post('review/', credentials)
    },
    update(projectId, credentials) {
        return Api().patch(`review/${projectId}`, credentials)
    },
    get(projectId) {
        return Api().get(`review?product=${projectId}`)
    },
    delete(projectId) {
        return Api().delete(`review/${projectId}`)
    },
    getAll() {
        return Api().get(`review/`)
    }
}