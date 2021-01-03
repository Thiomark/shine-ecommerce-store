<template>
    <div class="image-wrapper">
        <div class="third-shape imagePosition" :style="{ backgroundImage: `url('${productImage}')`}">
        </div>
    </div>
</template>

<script>

    export default {

        name: "ProductImage",
        props: {
            productImage: {
                type: String
            }
        }
       
    }

</script>

<style scoped>

    .image-wrapper {
        padding: 2em;
    }

    .imagePosition {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .third-shape::before {
        content: "";
        padding-bottom: 130%;
        display: inline-block;
        vertical-align: top;
    }
    
</style>



