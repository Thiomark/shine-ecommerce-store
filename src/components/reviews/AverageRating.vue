<template>
    <div  class="add-a-review">
        <h1>Average Rating</h1>
        <h2 v-if="sumOfReviews !== 0">{{averageCalculator(sumOfReviews, numberOfReviews)}} out of 5 stars</h2>
        <div class="reviews">
            <i v-for="index in 5" :key="index" class="far fa-star" :class="[showStarRating(averageCalculator(sumOfReviews, numberOfReviews), index) ? 'selectedStars' : 'not-selected-stars']"></i>
        </div>
        <input v-if="!$store.state.user" @click="navigate('Login')" type="button" value="Write a review">
    </div>
</template>

<script>
    export default {
        name: "AverageRating",
        props: {
            numberOfReviews: {
                type: Number
            },
            sumOfReviews: {
                type: Number
            }
        },
        methods: {
            showStarRating(numberOfStars, starPostion){
                if(numberOfStars >= starPostion){
                    return true
                }
                return false
            },
            averageCalculator(sumOfReviews, numberOfReviews){
                return sumOfReviews / numberOfReviews
            }
        },
        
    }

</script>

<style scoped>

    .add-a-review {
        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: 1fr;
        gap: .7em;
        /* flex-direction: column; */
        /* align-items: center; */
        background-color: aliceblue;
        border-radius: 7px;
        padding: 2em; 
    }

    .add-a-review  h1, h2 {
        color: rgb(20, 20, 20);
        text-transform: uppercase;
    }

    .add-a-review  h1 {
        font-size: .9rem;
        font-weight: 500;
    }

    .add-a-review  h2 {
        font-size: .8rem;
        font-weight: 400;
    }

    .add-a-review input[type="button"] {
        padding: 1.6em 2.3em;
        border-radius: 5px;
        color: rgb(224, 224, 224);
        border: none;
        background-color: rgb(36, 36, 36);
        font-size: .7rem;
        text-transform: uppercase;
        width: auto;
        max-width: 200px;
    }

    .selectedStars {
        color: #ffa534;
    }

    .fa-star {
        font-size: .8rem;
    }

    .not-selected-stars {
        color: rgb(182, 182, 182);
    }

</style>