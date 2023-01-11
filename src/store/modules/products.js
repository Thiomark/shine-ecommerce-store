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
        // const response = await ProductService.getAll()
        commit('setProducts', [
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-4f2ae02a-e745-4311-a11e-7ec3e2b43c4c.webp",
                "_id": "image-4f2ae02a-e745-4311-a11e-7ec3e2b43c4c",
                "productCost": 323,
                "title": "EZwear High Waist Flap Pocket Cargo Pants"
            },
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-969a1657-5414-4d84-89dc-51dca1d649d9.webp",
                "_id": "image-969a1657-5414-4d84-89dc-51dca1d649d9",
                "productCost": 542,
                "title": "Frenchy Gigot Sleeve Pointelle Knit Bodysuit",
            },
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-d620fbdb-1918-4fb4-9ed3-3344845cc7b6.webp",
                "productCost": 699,
                "title": "Floral Print Contrast Geo Embroidery Tape Jacket",
                "_id": "image-d620fbdb-1918-4fb4-9ed3-3344845cc7b6"
            },
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-f4cbf99a-32d8-4535-84a2-0678c61bc931.webp",
                "_id": "image-f4cbf99a-32d8-4535-84a2-0678c61bc931",
                "productCost": 761,
                "title": "SXY Slant Pocket Wide Leg Jeans"
            },
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-5137e6d6-7de6-4fa9-a72d-e35844ed3f07.webp",
                "_id": "image-5137e6d6-7de6-4fa9-a72d-e35844ed3f07",
                "productCost": 333,
                "title": "Cherry Embroidery Lantern Sleeve Cardigan"
            },
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-e404d047-168e-4923-8df9-79b3b8103f41.webp",
                "_id": "image-e404d047-168e-4923-8df9-79b3b8103f41",
                "productCost": 742,
                "title": "Solid Slant Pocket Pants"
            },
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-39934468-a220-4da3-a78f-529d7c42a866.webp",
                "_id": "image-39934468-a220-4da3-a78f-529d7c42a866",
                "productCost": 370,
                "title": "Letter Graphic Drop Shoulder Tee & Biker Shorts"
            },
            {
                "image": "https://res.cloudinary.com/thiomark/image/upload/v1673442698/portfolio/shine/image-ab2c5afa-ba52-4f66-9ec8-0d6ab9bd2fd2.webp",
                "_id": "image-ab2c5afa-ba52-4f66-9ec8-0d6ab9bd2fd2",
                "productCost": 809,
                "title": "Leopard Petal Sleeve Top"
            }
        ])  
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