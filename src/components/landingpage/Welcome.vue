<template>
    <div class="welcome-container">
        <h1>Lorem ipsum dolor sit</h1>
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <input type="button" value="shop now">
    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style  scoped>

    .welcome-container {
        padding: 2em;
    }

    input {
        padding: 1em 2em;
        background-color: rgb(29, 29, 29);
        color: rgb(235, 235, 235);
        text-transform: uppercase;
        border-radius: 5px;
        font-size: .7rem;
        border: none;
    }

    h1, h2 {
        color: rgb(236, 236, 236);
    }

    h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 8px;
        padding-bottom: .5em;
    }

    h2 {
        font-size: .8rem;
        font-weight: 100;
        letter-spacing: 2px;
        padding-bottom: 2em;
    }

</style>