<template>
    <div class="template-wrapper">
        <img src="https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large" alt="" srcset="">
        <div class="right-section">
            <h1>lorem ipsum</h1>
            <h2>May 27, 2015, 11:52 am</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos rerum iure voluptatibus. Quo ut fugiat doloribus!</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        cursor: pointer;
    }

    .template-wrapper {
        display: flex;
        padding: 1em 0;
    }

    .right-section {
        margin-left: 2em;
    }

    .right-section  h1 {
        font-size: 1rem;
        color: rgb(36, 36, 36);
        text-transform: capitalize;
    }

    .right-section  h2 {
        font-size: .8rem;
        color: rgb(148, 148, 148);
        font-weight: 400;
        margin: .6em 0;
    }

    .right-section  p {
        font-size: .8rem;
        color: rgb(36, 36, 36);
    }

</style>