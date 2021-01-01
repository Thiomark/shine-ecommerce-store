<template>
    <section class="product-wrapper">
        <ProductHeader />
        <div class="product-section">
            <Product 
                v-for="product in products" 
                :key="product._id" 
                :title="product.title"
                :price="product.productCost"
                :productID="product._id"
                :productImage="product.image"
            />
        </div>
    </section>
</template>

<script>
    import ProductHeader from './product/ProductHeader'
    import Product from './product/Product'
    import axios from 'axios'

    export default {
        name: 'ProductContainer',
        components: {
            ProductHeader,
            Product,
        },
        data() {
            return {
                products: []
            }
        },
        async created() {

            const response = await axios.get('https://ecomstoreapi.herokuapp.com/api/v1/product/')
            const allProducts = response.data.fetcheQuerys
            //console.log(allProducts.length)
            this.products = allProducts
            // state.commit('setAllProducts', products.data.fetcheQuerys)
        },
        // computed() {
        //     return this.$store.getters.getAllProducts
        // },
    }
</script>

<style scoped>

    .product-wrapper {
        width: 100%;
        max-width: 1100px;
        margin: auto;
        overflow-x: hidden;
    }

    .product-section {
        width: 100%;
        grid-gap: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
</style>