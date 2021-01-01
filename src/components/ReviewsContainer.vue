<template>
    <div class="reviews-container">
        <div class="reviews">
            <ReviewTemplate />
            <ReviewTemplate />
            <ReviewTemplate />
        </div>
        <h1>add a review</h1>
        <div class="add-review">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <form >
                <label for="name">review *</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <label for="name">NAME *</label>
                <input type="text">
                <label for="name">Email *</label>
                <input type="email">
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
        }
    }
</script>

<style  scoped>

    .add-review {
        padding: 1em 0;
        border-bottom: 1px solid rgb(221, 221, 221);
    }

    .stars {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-column-gap: .7em;
    }

    .far {
        font-size: .9rem;
        color: rgb(182, 182, 182);
    }

    .reviews-container {
        max-width: 1100px;
        margin: 2em auto;
        width: 100%;
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

    input[type="text"], input[type="email"] {
        padding: .6em;
        color: rgb(39, 39, 39);
        border: 1px solid rgb(228, 228, 228);
        max-width: 300px;
    }

    input[type="button"] {
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