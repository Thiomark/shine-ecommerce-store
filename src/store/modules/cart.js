const state = {
    shippingCost: 200,
    cartAmout: 0,
    totalCostWithShipping: 0,
    itemsInShoppingCart: [],
    
    favCartAmout: 0,
    totalFavCostWithShipping: 0,
    itemsInFavCart: [],
}

const mutations = {

    addItemToCart(state, productID){

        // this.addedItemToCart({price, title, productImage, productID, quantity: this.productQuantity, totalPrice })

        for(const item of state.itemsInShoppingCart){
            if(item._id === productID){
                return
            }
        }
        this.state.products.products.filter(product => product._id === productID ? state.itemsInShoppingCart.push(product) : '')
        state.cartAmout = 0
        state.totalCostWithShipping = 0
        for(const product of state.itemsInShoppingCart){
            state.cartAmout = state.cartAmout + product.productCost
        }
        state.totalCostWithShipping = state.shippingCost + state.cartAmout
    }, 
    removeItemFromCart(state, productID){
        state.itemsInShoppingCart = state.itemsInShoppingCart.filter(product => product._id !== productID)
        state.cartAmout = 0
        state.totalCostWithShipping = 0
        for(const product of state.itemsInShoppingCart){
            state.cartAmout = state.cartAmout + product.productCost
        }
        state.totalCostWithShipping = state.shippingCost + state.cartAmout
    }, 
    addItemToFavCart(state, productID){

        for(const item of state.itemsInFavCart){
            if(item._id === productID){
                return
            }
        }
        this.state.products.products.filter(product => product._id === productID ? state.itemsInFavCart.push(product) : '')
        state.favCartAmout = 0
        state.totalFavCostWithShipping = 0
        for(const product of state.itemsInFavCart){
            state.favCartAmout = state.favCartAmout + product.productCost
        }
        state.totalFavCostWithShipping = state.totalFavCostWithShipping + state.favCartAmout
    }, 
    removeItemFromFavCart(state, productID){
        state.itemsInFavCart = state.itemsInFavCart.filter(product => product._id !== productID)
        state.favCartAmout = 0
        state.totalFavCostWithShipping = 0
        for(const product of state.itemsInFavCart){
            state.favCartAmout = state.favCartAmout + product.productCost
        }
        state.totalFavCostWithShipping = state.totalFavCostWithShipping + state.favCartAmout
    }, 
    restItemsInShoppingCart(state){
        state.itemsInShoppingCart = []
    } 
}

const getters = {
    getItemsInCart: state => state.itemsInShoppingCart,
    getCartAmout: state => state.cartAmout,
    getShippingCost: state => state.shippingCost,
    getTotalCostWithShipping: state => state.totalCostWithShipping,
    getItemsInFavCart: state => state.itemsInFavCart,
    getFavCartAmout: state => state.favCartAmout,
    getTotalFavCostWithShipping: state => state.totalFavCostWithShipping
}

export default {
    state,
    mutations,
    getters
}