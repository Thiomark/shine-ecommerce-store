// const state = {
//     isAdmin: false,
//     token: 'h',
//     user: null,
//     isloggedIn: false
// }


// const mutations = {
//     setToken(state, token) {
//         state.token = token
//     },
//     setUser(state, user) {
//         if(user === null){
//             // user = {
//             //     name: null, 
//             //     _id: null, 
//             //     email: null, 
//             //     role: null
//             // }
//             state.isloggedIn = false
//         }else {
//             if(user.role === 'admin'){
//                 state.isAdmin = true
//             }
//             else{
//                 state.isAdmin = false
//             }
//             state.isloggedIn = true
//         }
//         state.user = user
//     },  
// }

// const actions = {
//     setToken({commit}, token) {
//         commit('setToken', token)
//     },
//     setUser({commit}, user) {
//         commit('setUser', user)
//     },
// }

// const getters = {
//     getTheUser: state => state.user,
// }

// export default {
//     state,
//     mutations,
//     actions,
//     getters
// }

const state = {
    itemsInShoppingCart: [],
    itemsInFavouriteCart: [],
    shoppingCartCost: 0,
    favouriteCartCost: 0,
    totalCostWithShipping: 0,
    token: 'h',
}

const mutations = {

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

    restItemsInShoppingCart(state, payLoad) {
        state.itemsInShoppingCart = payLoad
    },   
}

const actions = {

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
    restItemsInShoppingCart({commit}, loading) {
        commit('restItemsInShoppingCart', loading)
    },
}

const getters = {
    getShoppingcart: state => state.itemsInShoppingCart.length,
    getitemsInShoppingCart: state => state.itemsInShoppingCart,
    getToalCost: state => state.shoppingCartCost,
    getTotalCostWithShipping: state => state.totalCostWithShipping,
    getShippingCost: state => state.shippingCost,
    getItemsInFavouriteList: state => state.itemsInFavouriteCart,
    getFavouriteCartCost: state => state.favouriteCartCost,
}

export default {
    state,
    mutations,
    actions,
    getters
}