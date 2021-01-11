import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import user from './modules/user'
import products from './modules/products'
import helpers from './modules/helpers'
import cart from './modules/cart'



Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],

    modules: {
        products,
        user,
        helpers,
        cart
    },
})