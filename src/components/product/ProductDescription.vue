<template>
    <div class="description-container">
        <p>{{description}}</p>
    </div>
</template>

<script>
    export default {
        name: "ProductDescription",
        props: {
            description: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .description-container {
        max-width: 1100px;
        margin: 2em auto;
    }

    .description-container p {
        line-height: 2;
        color: rgb(112, 112, 112);
        font-size: 1rem;
    }

</style>