import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";
import ReviewService from '../services/ReviewService'

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
        itemsInFavouriteCart: [],
        shoppingCartCost: 0,
        favouriteCartCost: 0,
        totalCostWithShipping: 0,
        shippingCost: 200,
        hideNavbarAndFooter: false,
        pageLoading: false,
        requestFeedBack: null,
        productReviews: [],
        isAdmin: false
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
            state.shoppingCartCost = total
            state.totalCostWithShipping = total + state.shippingCost
        },
        setProductInTheFavouritetCart(state, payload){
            state.itemsInFavouriteCart.push(payload)
            let total = 0
            for(const product of state.itemsInFavouriteCart){
                total = total + product.price
            }
            state.favouriteCartCost = total
        },
        removeItemFromCart(state, payload){
            state.itemsInShoppingCart = state.itemsInShoppingCart.filter(function(product) {
                return product.productID !== payload
            })
            let total = 0
            for(const product of state.itemsInShoppingCart){
                total = total + product.price
            }
            state.shoppingCartCost = total
            state.totalCostWithShipping = total + state.shippingCost
        },

        // Removes Favourite items added
        removeItemFromFavourites(state, payload){
            state.itemsInFavouriteCart = state.itemsInFavouriteCart.filter(function(product) {
                return product.productID !== payload
            })
            let total = 0
            for(const product of state.itemsInFavouriteCart){
                total = total + product.price
            }
            state.favouriteCartCost = total
        },

        setFooterheight(state, payload){
            state.footerHeight = payload
        },
        setToken(state, token) {
            state.token = token
        },
        setUser(state, user) {
            if(user.role === 'admin'){
                state.isAdmin = true
            }
            state.user = user
        },
        setNavbarAndFooter(state, user) {
            state.hideNavbarAndFooter = user
        },
        setLoadingPage(state, loading) {
            state.pageLoading = loading
        },
        setRequestFeedBack(state, loading) {
            state.requestFeedBack = loading
        },
        restItemsInShoppingCart(state, payLoad) {
            state.itemsInShoppingCart = payLoad
        },
        fetchProductReviewsFromApi(state, reviews){
    
            if(state.user){
                reviews.forEach(review => {
                    if(review.user === state.user._id || state.user.role === 'admin'){
                        review.modifyReview = true
                    }else {
                        review.modifyReview = false
                    }
                });
                
            }else {
                reviews.forEach(review => {
                    review.modifyReview = false
                });
            }  
            state.productReviews = reviews      
        },
        updatedReviewState(state, review){
            state.requestFeedBack = review
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
        addedItemToFavouritesCart({commit}, product){
            commit('setProductInTheFavouritetCart', product)
        },
        removeFromCart({commit}, product){
            commit('removeItemFromCart', product)
        },
        removeFromFavouritesCart({commit}, product){
            commit('removeItemFromFavourites', product)
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
        setLoadingPage({commit}, loading) {
            commit('setLoadingPage', loading)
        },
        setRequestFeedBack({commit}, loading) {
            commit('setRequestFeedBack', loading)
        },
        restItemsInShoppingCart({commit}, loading) {
            commit('restItemsInShoppingCart', loading)
        },
        async fetchProductReviewsFromApi({commit}, id){
            const response = await ReviewService.get(id)
            commit('fetchProductReviewsFromApi', response.data.fetcheQuerys)
        },
        updatedReviewState({commit}, review){
            commit('updatedReviewState', review)
        }
        
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
        getToalCost: state => state.shoppingCartCost,
        getTotalCostWithShipping: state => state.totalCostWithShipping,
        getShippingCost: state => state.shippingCost,
        getNavBarInfo: state => state.hideNavbarAndFooter,
        getLoadingPage: state => state.pageLoading,
        getRequestFeedBack: state => state.requestFeedBack,
        getProductReviews: state => state.productReviews,
        getItemsInFavouriteList: state => state.itemsInFavouriteCart,
        getFavouriteCartCost: state => state.favouriteCartCost,
    }
})