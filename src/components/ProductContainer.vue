<template>
    <section class="product-wrapper">
        <!-- <OptionsMenu /> -->
        <div v-if="!getProducts" class="product-section">
            <Product 
                v-for="(product, index) in 8" 
                :key="index" 
            />
        </div>
        <div v-if="getProducts" class="product-section">
            <Product 
                v-for="product in getProducts" 
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

    import {mapGetters, mapActions} from 'vuex'
    import Product from './product/Product'

    export default {
        name: 'ProductContainer',
        components: {
            // OptionsMenu,
            Product,
        },
        data() {
            return {
                menuOpen: false
            }
        },
        methods: {
            ...mapActions(['fetchProducts']),
            showMenu(){
                this.menuOpen = !this.menuOpen
            }
        },
        created() {
            this.fetchProducts()
        },
        computed: {
            ...mapGetters(['getProducts'])
        }
        
    }
</script>

<style scoped>

    

    .product-wrapper {
        width: 100%;
        max-width: 1100px;
        overflow-x: hidden;
        margin: 0 auto 2em auto;
    }

    .product-section {
        width: 100%;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    @media (min-width: 577px){
        .product-wrapper {
            padding: 0 2em;
        }
    }

    @media (max-width: 577px) and (min-width: 300px){
        .product-section {
            width: 100%;
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1em;
        }
    }
    
</style>