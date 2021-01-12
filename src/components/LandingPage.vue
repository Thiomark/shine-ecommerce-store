<template>
    <div class="landing-page-container">
    </div>
</template>

<script>

    export default {
        name: 'LandingPage',
    }

</script>

<style scoped>

    .landing-page-container {
        width: 100%;
        height: 75vh;
        /* background-image: url('https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'); */
        background-image: url('https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%20%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-bottom: .2em solid black;

    }

    .icofont-scroll-bubble-down {
        color: rgb(240, 240, 240);
        font-size: 3rem;
        position: absolute;
        left: 50%;
        bottom: 100px;
        transform: translateX(-50%);
        animation: move-up-and-down 2s ease-in-out infinite alternate;
    }

     @keyframes move-up-and-down {
 
        100% {
            color: rgb(223, 223, 223);
            bottom: 80px;
        }
    }

    

</style>