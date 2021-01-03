import axios from 'axios'

export default () => {

    return axios.create({
        baseURL: `https://ecomstoreapi.herokuapp.com/api/v1/`,
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }   
    })
}