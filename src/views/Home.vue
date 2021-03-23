<template>
    <div class="home-container" :style="{paddingBottom: `${getFooterHeight}px`}">
        <LandingPage />
        <ProductContainer />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import LandingPage from '../components/LandingPage'
    import ProductContainer from '../components/ProductContainer'

    export default {
        name: 'Home',
        components: {
            LandingPage,
            ProductContainer,
        },
        computed: mapGetters(['getFooterHeight'])
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