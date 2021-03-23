import ProductService from '../../services/ProductService'

const state = {
    products: null,
    product: {},
    loading: false,
}

const mutations = {
    setProducts(state, products){
        state.products = products
    },
    setProduct(state, product){
        state.product = product
    },
    setLoading(state, loadingState){
        state.loading = loadingState
    }
}

const actions = {
    async fetchProducts({commit}){
        const response = await ProductService.getAll()
        commit('setProducts', response.data.fetcheQuerys)  
    },
    async fetchProduct({commit}, productID){
        commit('setLoading', true) 
        commit('setProduct', {}) 
        const product = await ProductService.get(productID)
        commit('setLoading', false) 
        commit('setProduct', product.data.product)   
    }
}

const getters = {
    getProducts: state => state.products,
    getProduct: state => state.product,
    getLoadingState: state => state.loading
}

export default {
    state,
    mutations,
    actions,
    getters
}