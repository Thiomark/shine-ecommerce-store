<template>
    <div class="newletter-wrapper">
        <div class="news-letter-container">
            <div class="header">
                <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <h2>A short sentence describing what someone will receive by subscribing</h2>
            </div>
            <div class="input-section">
                <input type="text" placeholder="Enter your email adress">
                <input type="button" value="subsribe">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsLetter"
    }
</script>

<style scoped>

    @media (max-width: 600px){

        .news-letter-container {
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        .header h1{
            padding-bottom: .6em;
        }

        .header h2 {
            padding-bottom: 1em;
        }

        input {
            width: 100%;
        }

        input[type="text"] {
            padding: 1em 1em;
            color: rgb(235, 235, 235);
            background-color: rgb(219, 219, 219);
            font-size: 13px;
            border: none;
            margin-bottom: 10px;
        }
    }

    input {
        width: 80%;
    }

    .newletter-wrapper {
        display: flex;
        justify-content: center;
        padding: 3em 2em;
        border-top: 1px solid rgb(192, 192, 192);
    }

    .news-letter-container {
        width: 100%;
        max-width: 1100px;
        display: flex;
        
        justify-content: space-between;
    }

    input[type="button"] {
        padding: 1em 3em;
        color: rgb(235, 235, 235);
        background-color: rgb(31, 31, 31);
        font-size: 13px;
        border: none;
    }

    @media (min-width: 601px){

        input[type="text"] {
            padding: 1em 3em;
            color: rgb(235, 235, 235);
            background-color: rgb(219, 219, 219);
            font-size: 13px;
            border: none;
        }
    }


    .news-letter-container h1 {
        font-size: 1.3rem;
        color: rgb(49, 49, 49);
    }

    .news-letter-container h2 {
        font-size: 1rem;
        font-weight: 400;
        color: rgb(83, 83, 83);
    }

</style>