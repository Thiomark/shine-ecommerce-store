import axios from 'axios'
import store from '../store/index'

const baseURL = 'https://ecomstoreapi.herokuapp.com/'

export default () => {
    return axios.create({
        baseURL: `${baseURL}api/v1/`,
        headers: {
            authorization: `Bearer ${store.state.account.token}`
        }   
    })
}