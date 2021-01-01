import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = `https://ecomstoreapi.herokuapp.com/api/v1/product/`

export default new Vuex.Store({
    state: {
        token: '',
        allProducts: [],
        user: {},
        shoppingCart: 6
    },

    mutations: {
        setShoppingcart(state, payload){
            state.shoppingCart = payload
        },
        setAllProducts(state, payload){
            state.allProducts = payload
        }
    },

    actions: {
        async setAllProducts(state){
            const response = await fetch(url)
            const products = await response.json()
            state.commit('setAllProducts', products.data.fetcheQuerys)
        }
    },
    
    modules: {
    },

    getters: {
        getShoppingcart: state => state.shoppingCart,
        getAllProducts: state => state.allProducts
    }
})