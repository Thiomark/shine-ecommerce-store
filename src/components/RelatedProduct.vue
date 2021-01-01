<template>
    <div class="related-product-container">
        <Product />
        <Product />
        <Product />
    </div>
</template>

<script>

    import Product from './product/Product'
    
    export default {
        name: "RelatedProduct",
        components: {
            Product
        }
    }

</script>

<style scoped>
    .related-product-container {
        display: grid;
        max-width: 1100px;
        margin: 2em auto;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>