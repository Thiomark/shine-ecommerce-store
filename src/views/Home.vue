<template>
    <div class="home-container">
        <LandingPage />
        <ProductContainer />
        <NewsLetter />
    </div>
</template>

<script>
    import LandingPage from '../components/LandingPage'
    import ProductContainer from '../components/ProductContainer'
    import NewsLetter from '../components/NewsLetter'

    export default {
        name: 'Home',
        components: {
            LandingPage,
            ProductContainer,
            NewsLetter,
        }
    }
</script>

<style scoped>

    home-containe {
        /* width: 100vw;
        min-height: 100vh; */
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

</style>