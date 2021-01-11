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
     
        <ReviewsContainer :productReviews="productReviews" class="switch"/>
        <RelatedProduct />   
    </div>
</template>

<script>

    import ProductInformation from '../components/product/ProductInformation'
    import ProductImage from '../components/product/ProductImage'
    import RelatedProduct from '../components/RelatedProduct'
    import ReviewsContainer from '../components/ReviewsContainer'

    import ReviewService from '../services/ReviewService'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Product",
        components: {
            RelatedProduct,
            ProductInformation,
            ProductImage,
            ReviewsContainer,
        },
        data() {
            return {
                reviews: false,
                description: true,
                productID: this.$route.params.productID,
                footerHeight: 0,
                productReviews: []
            }
        },
        methods: {
            ...mapActions(['fetchASingleProduct', 'setNavbarAndFooter', 'setLoadingPage']),
            ...mapGetters(['getFooterHeight']),

            switchToReview(){
                this.reviews = true
                this.description = false
            },
            switchToDescription(){
                this.reviews = false
                this.description = true
            },
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
        },
        async created() {
            this.setLoadingPage(false)
            this.setNavbarAndFooter(false)
            this.fetchASingleProduct(this.productID)
            const response = await ReviewService.get(this.productID)
            this.productReviews = await response.data.fetcheQuerys
        },
        computed: mapGetters(['getOneProducts']),
        mounted() {
            this.footerHeight = this.getFooterHeight()
        },
        
    }

</script>

<style scoped>

    section {
        width: 100%;
        padding: 2em;
        border-top: 1px solid rgb(226, 226, 226); 
        margin-top: 1em;
    }

    .select-tab {
        justify-content: space-evenly;
        display: flex;
        /* padding-bottom: 1.5em ; */
        /* border-bottom: 1px solid rgb(226, 226, 226); */
    }

    /* .select-tab a {
        font-size: .9rem;
        font-weight: blod;
        color: rgb(31, 31, 31);
    } */

    /* .select-tab a:hover {
        color: #006d6d;
    } */



    .product-wrapper {
        width: 100%;
        min-height: 100vh;
        padding-top: 5em;
        max-width: 1100px;
        margin: auto;
    }

    @media(min-width: 600px){
        .product-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

   
    
    

</style>