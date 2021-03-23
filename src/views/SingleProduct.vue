<template>
    <div class="product-wrapper" :style="{paddingBottom: `${getFooterHeight}px`}">  
        <div class="product-section">
            <ProductImage :productImage="getProduct.image"/>
            <ProductInformation />
        </div>  
        <ReviewsContainer class="switch"/>
        <RelatedProduct />   
    </div>
</template>

<script>

    import ProductInformation from '../components/product/ProductInformation'
    import ProductImage from '../components/product/ProductImage'
    import RelatedProduct from '../components/RelatedProduct'
    import ReviewsContainer from '../components/ReviewsContainer'
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
                productReviews: []
            }
        },
        methods: {
             ...mapActions(['fetchProduct', 'setLoadingPage']),
        },
        async created() {
            this.setLoadingPage(false)
            this.fetchProduct(this.productID)
        },
        computed: mapGetters(['getFooterHeight', 'getProduct'])
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