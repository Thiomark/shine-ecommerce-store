<template>
    <div class="home-container" :style="{paddingBottom: `${footerHeight}px`}">
        <LandingPage />
        <ProductContainer />
        <NewsLetter />
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import LandingPage from '../components/LandingPage'
    import ProductContainer from '../components/ProductContainer'
    //import NewsLetter from '../components/NewsLetter'

    export default {
        name: 'Home',
        components: {
            LandingPage,
            ProductContainer,
            //NewsLetter,
        },
        data() {
            return {
                footerHeight: null
            }
        },
        methods: {
            ...mapGetters(['getFooterHeight']),
            ...mapActions(['setNavbarAndFooter'])
        },
        created() { 
            this.setNavbarAndFooter(false)
            this.footerHeight = this.getFooterHeight()
        },
    }
</script>

<style scoped>

    home-containe {
        width: 100%;
        position: relative;
        /* min-height: 100vh;  */
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

</style>