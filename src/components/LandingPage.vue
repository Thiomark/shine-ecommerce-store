<template>
    <div class="landing-page-container">
        <div class="overlay">
            <Welcome />
            <i class="icofont-scroll-bubble-down"></i>
        </div>
    </div>
</template>

<script>
    import Welcome from '../components/landingpage/Welcome'

    export default {
        name: 'LandingPage',
        components: {
            Welcome
        }
    }
</script>

<style scoped>

    .overlay {
        /* z-index: 50; */
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .landing-page-container {
        width: 100%;
        height: 100vh;
        /* background-image: url('https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'); */
        background-image: url('https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%20%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        /* filter: blur(8px);
  -webkit-filter: blur(8px); */
    }

    .icofont-scroll-bubble-down {
   
        color: rgb(240, 240, 240);
        font-size: 3rem;
        position: absolute;
        left: 50%;
        bottom: 50px;
        transform: translateY(-50%);
        animation: move-up-and-down 2s ease-in-out infinite alternate;
    }

     @keyframes move-up-and-down {
 
        100% {
            color: rgb(223, 223, 223);
            bottom: 40px;
        }
    }

    

</style>