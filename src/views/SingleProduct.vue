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
        <div class="buttons-container">
            <div class="select-tab">
                <a @click.prevent="switchToDescription" :class="{'addtheborder': description}" href="javascript:void(0)">Description</a>
                <a @click.prevent="switchToReview" :class="{'addtheborder': reviews}" href="javascript:void(0)">Reviews</a>
            </div>
        </div>
        
        <div class="product-info">
            <ProductDescription v-if="getOneProducts && description" :description="getOneProducts.description" class="switch"/>
            <ReviewsContainer :productReviews="productReviews" v-if="reviews" class="switch"/>
        </div>
        <RelatedProduct />   
    </div>
</template>

<script>

    import ProductInformation from '../components/product/ProductInformation'
    import ProductImage from '../components/product/ProductImage'
    import ProductDescription from '../components/product/ProductDescription'
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
            ProductDescription,
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
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
        },
        async created() {
            this.setNavbarAndFooter(false)
            this.fetchASingleProduct(this.productID)
            const response = await ReviewService.get(this.productID)
            this.productReviews = await response.data.fetcheQuerys
            console.log(response.data)

        },
        computed: mapGetters(['getOneProducts']),
        mounted() {
            this.footerHeight = this.getFooterHeight()
        },
        
    }

</script>

<style scoped>

    .buttons-container {
        max-width: 1100px;
        margin: 0 auto;
        width: 100%;
        padding: 0 2em;
    }

    .select-tab {
        justify-content: space-evenly;
        display: flex;
        padding-bottom: 1.5em ;
        border-bottom: 1px solid rgb(226, 226, 226);
    }

    .select-tab a {
        font-size: .9rem;
        font-weight: blod;
        color: rgb(31, 31, 31);
    }

    .select-tab a:hover {
        color: #006d6d;
    }



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