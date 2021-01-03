<template>
    <div class="product-wrapper" :style="{paddingBottom: `${footerHeight}px`}">  
        <div class="product-section">
            <ProductImage 
                :productImage="getOneProducts.image"
            />
            <ProductInformation 
                v-if="getOneProducts"
                :tags="getOneProducts.tags"
                :categories="getOneProducts.categories"
                :description="getOneProducts.summary"
                :price="getOneProducts.productCost"
                :title="getOneProducts.title"
                :productID="getOneProducts._id"
            />
        </div>  
        <div class="select-tab">
            <a @click.prevent="switchToDescription" :class="{'addtheborder': description}" href="javascript:void(0)">Description</a>
            <a @click.prevent="switchToReview" :class="{'addtheborder': reviews}" href="javascript:void(0)">Reviews</a>
        </div>
        <div class="product-info">
            <ProductDescription v-if="getOneProducts && description" :description="getOneProducts.description" class="switch"/>
            <ReviewsContainer v-if="reviews" class="switch"/>
        </div>
        <!-- 
        
        <h1>Related Products</h1>
        <RelatedProduct /> -->
    </div>
</template>

<script>

    import ProductInformation from '../components/product/ProductInformation'
    import ProductImage from '../components/product/ProductImage'
    import ProductDescription from '../components/product/ProductDescription'
    // import RelatedProduct from '../components/RelatedProduct'
    import ReviewsContainer from '../components/ReviewsContainer'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Product",
        components: {
            //RelatedProduct,
            ProductInformation,
            ProductImage,
            ProductDescription,
            ReviewsContainer
        },
        data() {
            return {
                reviews: false,
                description: true,
                productID: this.$route.params.productID,
                footerHeight: 0
            }
        },
        methods: {
            ...mapActions(['fetchASingleProduct', 'setNavbarAndFooter']),
            ...mapGetters(['getFooterHeight']),

            switchToReview(){
                this.reviews = true
                this.description = false
            },
            switchToDescription(){
                this.reviews = false
                this.description = true
            },
        },
        created() {
            this.setNavbarAndFooter(false)
            this.fetchASingleProduct(this.productID)
        },
        computed: mapGetters(['getOneProducts']),
        mounted() {
            this.footerHeight = this.getFooterHeight()
        },
        
    }

</script>

<style scoped>

    .product-wrapper {
        width: 100%;
        min-height: 100vh;
        padding-top: 3em;
        max-width: 1100px;
        margin: auto;
    }

    @media(min-width: 600px){
        .product-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    .select-tab {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        padding: 0 2em;
    }

    .select-tab a {
        font-size: .9rem;
        font-weight: blod;
        color: rgb(31, 31, 31);
    }

    .select-tab a:hover {
        color: #006d6d;
    }
    


    /* 

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
    } */

    

</style>