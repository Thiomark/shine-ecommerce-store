<template>
    <div class="buttons-container">
        <div class="select-tab">
            <a @click.prevent="switchToDescription" :class="{'addtheborder': description}" href="javascript:void(0)">Description</a>
            <a @click.prevent="switchToReview" :class="{'addtheborder': reviews}" href="javascript:void(0)">Reviews</a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ReviewsToggleButtons"
    }

</script>

<style scoped>


    

</style>