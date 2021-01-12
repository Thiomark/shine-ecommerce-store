import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import account from './modules/account'
import products from './modules/products'
import helpers from './modules/helpers'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    

    modules: {
        products,
        account,
        helpers,
        cart
    },
})