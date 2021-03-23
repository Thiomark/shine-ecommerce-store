<template>
    <div class="image-wrapper">
        <Skeleton v-if="!productImage" height="35em" class=" imagePosition"/>
        <div v-if="productImage" class="third-shape imagePosition" :style="{ backgroundImage: `url('${productImage}')`}">
        </div>
    </div>
</template>

<script>

    import Skeleton from '../extra/Skeleton'

    export default {

        name: "ProductImage",
        components: {
           Skeleton
        },
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



