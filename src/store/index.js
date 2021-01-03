import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],

    state: {
        token: '',
        footerHeight: null,
        allProducts: [],
        user: null,
        singleProduct: {},
        itemsInShoppingCart: [],
        totalCost: 0,
        totalCostWithShipping: 0,
        shippingCost: 200,
        hideNavbarAndFooter: false
    },

    mutations: {
        setAllProducts(state, payload){
            state.allProducts = payload
        },
        setASingleProduct(state, payload){
            state.singleProduct = payload
        },
        setProductInTheCart(state, payload){
            state.itemsInShoppingCart.push(payload)
            let total = 0
            for(const product of state.itemsInShoppingCart){
                total = total + product.price
            }
            state.totalCost = total
            state.totalCostWithShipping = total + state.shippingCost
        },
        removeItemFromCart(state, payload){
            state.itemsInShoppingCart = state.itemsInShoppingCart.filter(function(product) {
                return product.productID !== payload
            })
            let total = 0
            for(const product of state.itemsInShoppingCart){
                total = total + product.price
            }
            state.totalCost = total
            state.totalCostWithShipping = total + state.shippingCost
        },
        setFooterheight(state, payload){
            state.footerHeight = payload
        },
        setToken(state, token) {
            state.token = token
        },
        setUser(state, user) {
            state.user = user
        },
        setNavbarAndFooter(state, user) {
            state.hideNavbarAndFooter = user
        }
    },

    actions: {
        async fetchAllProducts({commit}){
            const response = await axios.get('https://ecomstoreapi.herokuapp.com/api/v1/product/')
            commit('setAllProducts', response.data.fetcheQuerys)
        },
        async fetchASingleProduct({commit}, id){
            const response = await axios.get(`https://ecomstoreapi.herokuapp.com/api/v1/product/${id}`)
            commit('setASingleProduct', response.data.product)
        },
        addedItemToCart({commit}, product){
            commit('setProductInTheCart', product)
        },
        removeFromCart({commit}, product){
            commit('removeItemFromCart', product)
        },
        addFooterheight({commit}, height){
            commit('setFooterheight', height)
        },
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        },
        setNavbarAndFooter({commit}, user) {
            commit('setNavbarAndFooter', user)
        },
    },
    
    modules: {
    },

    getters: {
        getShoppingcart: state => state.itemsInShoppingCart.length,
        getAllProducts: state => state.allProducts,
        getOneProducts: state => state.singleProduct,
        getitemsInShoppingCart: state => state.itemsInShoppingCart,
        getTheUser: state => state.user,
        getFooterHeight: state => state.footerHeight,
        getToalCost: state => state.totalCost,
        getTotalCostWithShipping: state => state.totalCostWithShipping,
        getShippingCost: state => state.shippingCost,
        getNavBarInfo: state => state.hideNavbarAndFooter,
    }
})