<template>
    <footer>
        <div class="footer-wrapper">
            <ul class="top-section">
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
                <a>gdgd</a>
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
    export default {
        name: "Footer"
    }
</script>

<style scoped>

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

    .top-section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1em;
        place-items: center;
        margin: 2em auto;
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
        padding: 1em 0;
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