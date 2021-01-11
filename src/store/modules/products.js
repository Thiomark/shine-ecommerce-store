import ProductService from '../../services/ProductService'
import ReviewService from '../../services/ReviewService'

const state = {
    allProducts: [],
    productReviews: [],
    singleProduct: {},
}


const mutations = {
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
    setAllProducts(state, payload){
        state.allProducts = payload
    },
    setASingleProduct(state, payload){
        state.singleProduct = payload
    },
}

const actions = {
    async fetchProductReviewsFromApi({commit}, id){
        const response = await ReviewService.get(id)
        commit('fetchProductReviewsFromApi', response.data.fetcheQuerys)
    },
    async fetchAllProducts({commit}){
        const response = await ProductService.getAll()
        commit('setAllProducts', response.data.fetcheQuerys)
    },
    async fetchASingleProduct({commit}, id){
        const response = await ProductService.get(id)
        commit('setASingleProduct', response.data.product)
    },
}

const getters = {
    getProductReviews: state => state.productReviews,
    getAllProducts: state => state.allProducts,
    getOneProducts: state => state.singleProduct,
}

export default {
    state,
    mutations,
    actions,
    getters
}