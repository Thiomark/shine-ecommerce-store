<template>
    <div  class="add-a-review">
        <h1 v-if="reviewAvarage > 0">Average Rating</h1>
        <h2 v-if="reviewAvarage > 0">{{reviewAvarage}} out of 5 stars</h2>
        <h2 v-if="!reviewAvarage > 0">Write the first review</h2>
        <div v-if="reviewAvarage > 0" class="reviews">
            <i :style="{fontSize: '1.2em', margin: '0 .1em', color: reviewAvarage >= 0.5 ? '#f8e825' : 'rgb(182, 182, 182)'}" :class="reviewAvarage >= 1 ? 'fas fa-star' : reviewAvarage >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'"></i>
            <i :style="{fontSize: '1.2em', margin: '0 .1em', color: reviewAvarage >= 1.5 ? '#f8e825' : 'rgb(182, 182, 182)'}" :class="reviewAvarage >= 2 ? 'fas fa-star' : reviewAvarage >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'"></i>
            <i :style="{fontSize: '1.2em', margin: '0 .1em', color: reviewAvarage >= 2.5 ? '#f8e825' : 'rgb(182, 182, 182)'}" :class="reviewAvarage >= 3 ? 'fas fa-star' : reviewAvarage >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'"></i>
            <i :style="{fontSize: '1.2em', margin: '0 .1em', color: reviewAvarage >= 3.5 ? '#f8e825' : 'rgb(182, 182, 182)'}" :class="reviewAvarage >= 4 ? 'fas fa-star' : reviewAvarage >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'"></i>
            <i :style="{fontSize: '1.2em', margin: '0 .1em', color: reviewAvarage >= 4.5 ? '#f8e825' : 'rgb(182, 182, 182)'}" :class="reviewAvarage >= 5 ? 'fas fa-star' : reviewAvarage >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'"></i>
        </div>
        <input v-if="!getIsloggedIn" @click="navigate('Login')" type="button" value="Write a review">
    </div>
</template>

<script>
    
    import {mapGetters} from 'vuex'

    export default {
        name: "AverageRating",
        props: {
            reviewAvarage: {
                type: [Number, String]
            }
        },
        computed: {
            ...mapGetters(['getIsloggedIn'])
        },
        methods: {
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
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