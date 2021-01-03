<template>
    <footer :style="{marginTop: `${-footerHeight}px`}">
        <div class="footer-wrapper">
            <ul class="top-section">
                <a>Shipping</a>
                <a>FAQ</a>
                <a>Terms & conditions</a>
            </ul>
            <div class="bottom-section">
                <div class="bottom-section-wrapper">
                    <h1>©2020 thiomark.com</h1>
                    <div class="icons">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-facebook-f"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Footer",
        data() {
            return {
                footerHeight: 0
            }
        },
        methods: {
            ...mapActions(['addFooterheight'])
        },
        mounted() {
            this.footerHeight = document.querySelector('footer').offsetHeight;
            this.addFooterheight(document.querySelector('footer').offsetHeight)
        },
    }
</script>

<style scoped>

    @media (max-width: 500px){
        .top-section {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1em;
            place-items: center;
            padding: 2em;
        }
    }

    .top-section a{
        text-transform: uppercase;
    }

    footer {
        width: 100%;
        background-color: rgb(43, 43, 43);
        display: flex;
        flex-direction: column;
        
    }

    .top-section, .bottom-section-wrapper {
        max-width: 1100px;
        margin: auto;
    }

    .icon {
        display: flex;
    }

    @media (min-width: 501px) {

        .top-section {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1em;
            place-items: center;
            margin: 2em auto;
        }
    }

    .top-section a{
         color: rgb(236, 236, 236);
        font-size: .8rem;
        font-weight: 400;
    }

    .bottom-section-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .bottom-section {
        padding: 1em 2em;
        background-color: rgb(26, 26, 26);
    }

    h1 {
        color: rgb(236, 236, 236);
        font-size: .8rem;
        font-weight: 400;
    }

    .fab {
        color: rgb(236, 236, 236);
        margin: 0 .8em;
    }



</style>