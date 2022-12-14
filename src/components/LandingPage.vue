<template>
    <div class="landing-page-container">
        <div class="shadow"/>
        <div class="info">
            <h1>Make Everyday A Runway</h1>
            <button>Shop Now</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'LandingPage',
    }

</script>

<style scoped>

    button {
        padding: .8em 2em;
        font-size: .8rem;
        color: white;
        border: 1px solid rgb(217, 217, 217);
        background-color: transparent;
    }

    .shadow {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.4);
    }

    button:hover {
        border: 1px solid rgb(255, 255, 255);
    }

    .landing-page-container {
        position: relative;
        width: 100%;
        height: 50vh;
        background-image: url('https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%20%;
        position: relative;
        display: flex;
        overflow: hidden;
    }

    .info {
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5em;
        max-width: 65%;
        margin: auto;
    }

    .info h1 {
        color: white;
        text-align: center;
        font-weight: 300;
        font-size: 2rem;
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

    @media (min-width: 900px) { 
        .info {
            margin-bottom: 8%;
        }

        .landing-page-container {
            height: 65vh;
        }

        .info h1 {
            font-size: 3.5rem;
        }

        button {
            font-size: 1rem;
        }

        .shadow {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    @keyframes move-up-and-down {
 
        100% {
            color: rgb(223, 223, 223);
            bottom: 80px;
        }
    }

    

</style>