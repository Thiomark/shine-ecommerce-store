<template>
    <div class="container">
        <div class="loading-effect" :style="{height}">
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkeletonLoader",
        props: {
            height: {
                type: String
            },
        }
        
    }
</script>

<style scoped>
    .container {
        overflow: hidden;
        display: flex;
        width: 100%;
    }

    .loading-effect {
        flex-grow: 1;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 10%,#dbdbdb , rgba(0, 0, 0, 0));
        animation: shine-loading-image 3s infinite ease-in;
    }

    @keyframes shine-loading-image {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style>