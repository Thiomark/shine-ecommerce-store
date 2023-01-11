import axios from 'axios'
import store from '../store/index'

const baseURL = 'http://localhost:5000'

export default () => {
    return axios.create({
        baseURL: `${baseURL}api/v1/`,
        headers: {
            authorization: `Bearer ${store.state.account.token}`
        }   
    })
}