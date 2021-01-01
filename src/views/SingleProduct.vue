<template>
    <div class="product-wrapper">    
        <SelectProduct 
            v-if="product"
            :tags="product.tags"
            :categories="product.categories"
            :description="product.summary"
            :price="product.productCost"
            :title="product.title"
        />
        <div class="select-tab">
            <a @click.prevent="switchToDescription" :class="{'addtheborder': description}" href="javascript:void(0)">Description</a>
            <a @click.prevent="switchToReview" :class="{'addtheborder': reviews}" href="javascript:void(0)">Reviews</a>
        </div>
        <div class="product-info">
            <ProductDescription v-if="description" :description="product.description" class="switch"/>
            <ReviewsContainer v-if="reviews" class="switch"/>
        </div>
        <h1>Related Products</h1>
        <RelatedProduct />
    </div>
</template>

<script>

    import SelectProduct from '../components/product/SelectProduct'
    import ProductDescription from '../components/product/ProductDescription'
    import RelatedProduct from '../components/RelatedProduct'
    import ReviewsContainer from '../components/ReviewsContainer'
    import axios from 'axios'

    export default {
        name: "Product",
        components: {
            RelatedProduct,
            SelectProduct,
            ProductDescription,
            ReviewsContainer
        },
        data() {
            return {
                reviews: false,
                description: true,
                productID: this.$route.params.productID,
                product: null,
                categories: ['amet', 'consectetur', 'sit']
            }
        },
        methods: {
            switchToReview(){
                this.reviews = true
                this.description = false
            },
            switchToDescription(){
                this.reviews = false
                this.description = true
            },
            
        },
        async created() {
            // console.log(this.productID)
            const response = await axios.get(`https://ecomstoreapi.herokuapp.com/api/v1/product/${this.productID}`)
            const singleProduct = response.data.product
            //console.log(singleProduct)
            this.product = singleProduct
            // state.commit('setAllProducts', products.data.fetcheQuerys)
        },
        
    }
</script>

<style scoped>


    .select-tab {
        display: flex;
        width: 100%;
        justify-content:space-evenly ;
        margin: 2em auto;
        border-bottom: 1px solid rgb(185, 185, 185);
    }

    .select-tab a {
        font-size: 1em;
        font-weight: blod;
        color: rgb(31, 31, 31);
        padding: 1em 5em;;
    }

    .select-tab a:hover {
        color: #006d6d;
    }

    .addtheborder {
        border-bottom: 2px solid #006d6d;
    }

    .product-info {
        width: 100%;
        position: relative;
    }

    h1 {
        font-size: 1.6em;
        color: rgb(61, 62, 63);
        font-weight: 400;
        text-align: center;
    }

    

</style>