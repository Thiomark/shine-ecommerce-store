import Api from './Api'

export default {
    post(credentials) {
        return Api().post('projects/', credentials)
    },
    update(projectId, credentials) {
        return Api().patch(`projects/${projectId}`, credentials)
    },
    get(projectId) {
        return Api().get(`projects/${projectId}`)
    },
    delete(projectId) {
        return Api().delete(`projects/${projectId}`)
    },
    getAll() {
        return Api().get(`projects/`)
    }
}