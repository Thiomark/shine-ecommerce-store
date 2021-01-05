<template>
    <div class="reviews-container">
        <div v-if="!$store.state.user" class="add-a-review">
            <input @click="navigate('Login')" type="button" value="Write a review">
        </div>
        <div class="reviews">
            <ReviewTemplate />
            <ReviewTemplate />
            <ReviewTemplate />
        </div>
        <h1 v-if="$store.state.user" >add a review</h1>
        <div v-if="$store.state.user" class="add-review">
            <i @mouseover="starHover(1)" @mouseleave="removeTheHover"  class="selected-stars far fa-star"></i>
            <i @mouseover="starHover(2)" @mouseleave="removeTheHover"  class="far fa-star"></i>
            <i @mouseover="starHover(3)" @mouseleave="removeTheHover"  class="far fa-star"></i>
            <i @mouseover="starHover(4)" @mouseleave="removeTheHover"  class="far fa-star"></i>
            <i @mouseover="starHover(5)" @mouseleave="removeTheHover"  class="far fa-star"></i>
            <form >
                <label for="name">TITLE *</label>
                <input type="text">
                <label for="name">review *</label>
                <textarea name="" cols="30" rows="10"></textarea>
                <input type="button" value="submit">
            </form>
        </div>
    </div>
</template>

<script>
    import ReviewTemplate from './reviews/ReviewTemplate'
    export default {
        components: {
            ReviewTemplate
        },
        data() {
            return {
                numberOfSelectedStars: 0,
                makeit: true,
            }
        },
        created() {
            const allStars = document.querySelectorAll('.far')
                allStars.forEach(star => star.style.color = "red")
        },
        methods: {
            starHover(index){
                const allStars = document.querySelectorAll('.far')

                for(let i = 0; i < allStars.length; i++){
                    allStars[i].style.color = "rgb(182, 182, 182)"
                }

                for(let i = 0; i <= index; i++){
                    allStars[i].style.color = "#ffa534"
                }
            },
            removeTheHover(){
                // const allStars = document.querySelectorAll('.far')

                // for(let i = 0; i < allStars.length; i++){
                //     allStars[i].style.color = "rgb(182, 182, 182)"
                // }
            },
            Selected(index){
                const allStars = document.querySelectorAll('.far')
                for(let i = 0; i < allStars.length; i++){
                    allStars[i].className = "far fa-star not-selected-stars"
                }
                for(let i = 0; i <= index; i++){
                    allStars[i].className = "far fa-star selected-stars"
                }
            }
        },
    }
</script>

<style  scoped>

    .add-a-review {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgb(221, 221, 221);
        padding-bottom: 2em;
    }

    .add-a-review input[type="button"] {
        padding: 1em;
        color: rgb(224, 224, 224);
        border: none;
        background-color: rgb(36, 36, 36);
        font-size: .7rem;
        text-transform: uppercase;
        width: auto;
    }

    .add-review {
        padding: 1em 0;
        border-bottom: 1px solid rgb(221, 221, 221);
    }

    .selected-stars {
        color: #ffa534;
    }

    .not-selected-stars {
        color: rgb(182, 182, 182);
    }

    .stars {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-column-gap: .8em;
    }

    .far {
        font-size: 1.1rem;
        color: rgb(182, 182, 182);
    }

    .reviews-container {
        max-width: 1100px;
        margin: 2em auto;
        width: 100%;
        padding: 0 2em;
    }

    h1 {
        color: rgb(20, 20, 20);
        font-size: .8rem;
        font-weight: 400;
        text-transform: uppercase;
        padding: 1.4em 0;
        border-bottom: 1px solid rgb(207, 207, 207);
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .add-review input[type="text"], input[type="email"] {
        padding: .6em;
        color: rgb(39, 39, 39);
        border: 1px solid rgb(228, 228, 228);
        max-width: 300px;
    }

    .add-review input[type="button"] {
        padding: 1.5em;
        color: rgb(224, 224, 224);
        border: none;
        background-color: rgb(36, 36, 36);
        max-width: 300px;
        font-size: .7rem;
        text-transform: uppercase;
        width: 100px;
        margin: 2em 0;
    }

    textarea {
        padding: .6em;
        color: rgb(39, 39, 39);
        border: 1px solid rgb(228, 228, 228);
        width: 100%;
        resize: none;
    }

    label {
        font-size: .9rem;
        padding: 1em 0;
        text-transform: uppercase;
    }

</style>