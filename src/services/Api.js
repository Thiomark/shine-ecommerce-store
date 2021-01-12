import axios from 'axios'
import store from '../store/index'

export default () => {
    return axios.create({
        baseURL: `https://ecomstoreapi.herokuapp.com/api/v1/`,
        headers: {
            authorization: `Bearer ${store.state.account.token}`
        }   
    })
}