<template>
    <div class="welcome-container">
        <h1>Lorem, ipsum dolor</h1>
        <h2>Lorem ipsum dolor sit</h2>
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <input type="button" value="shop now">
    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style  scoped>
    input {
        padding: 1em 2em;
        background-color: rgb(29, 29, 29);
        color: rgb(235, 235, 235);
        text-transform: uppercase;
        border-radius: 5px;
        font-size: 12px;
        border: none;
    }

    h1, h2, h3 {
        color: rgb(236, 236, 236);
    }

    h1 {
        font-size: 1rem;
    }

    h2 {
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 8px;
    }

    h3 {
        font-size: .7rem;
        font-weight: 100;
        letter-spacing: 2px;
        padding-bottom: 2em;
    }

</style>