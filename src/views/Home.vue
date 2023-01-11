<template>
    <div class="home-container" :style="{paddingBottom: `${getFooterHeight}px`}">
        <LandingPage />
        <div class="new-arrivals">
            <h1>New Arrivals</h1>
            <p>Discover the latest ready-to-wear dresses.</p>
        </div>
        <!-- <div class="container carousel" style="display: hidden;">
            <carousel touchDrag :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
                <slide class="slide">
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                </slide>
                <slide class="slide">
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                </slide>
            </carousel>
        </div> -->
        <ProductContainer />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import LandingPage from '../components/LandingPage'
    // import { Carousel } from 'vue-carousel';
    // import ProductComponent from '../components/product/ProductComponent'
    import ProductContainer from '../components/ProductContainer'

    export default {
        name: 'Home',
        components: {
            LandingPage,
            // Carousel,
            // Slide,
            // ProductComponent,
            ProductContainer,
        },
        data() {
            return {
                products: [
                    {name: ''}
                ]
            }
        },
        computed: mapGetters(['getFooterHeight'])
    }
</script>

<style scoped>

    .new-arrivals {
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: .6em;
        max-width: 1300px;
        margin: auto;
        width: 100%; 
    }

    .new-arrivals h1 {
        font-size: 1.7rem;
        font-weight: 200;
    }

    .new-arrivals p {
        font-size: .9rem;
        font-weight: 300;
    }

    .home-containe {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .carousel {
        padding: 2em;
    }

    .carousel .slide {
        display: flex;
        gap: 1em;
    }

</style>