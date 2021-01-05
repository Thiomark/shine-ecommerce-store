<template>
    <div class="product-wrapper">
        <h1>Add A Product</h1>
            <form class="cf">
            <input type="text" placeholder="Product title">
            <input type="text" placeholder="Categories, separated by a comma">
            <input type="text" placeholder="Tags, separated by a comma">
            <input type="text" placeholder="Section">
            <input type="text" placeholder="Product image url">
            <input type="number" placeholder="Product Price">
            <textarea name="message" type="text" placeholder="Product description"></textarea>
            <textarea name="message" type="text" placeholder="Product summary"></textarea>
            <input type="submit" value="Submit" >
        </form>
    </div>
</template>

<script>
    export default {
        name: "ProductForm"
        
    }
</script>

<style scoped>


    .product-wrapper {
        background: #f1f1f1;
        padding: 1em;
    }

    h1 {
        text-align: center;
        color: #a8a8a8;
        text-shadow: 1px 1px 0 white;
    }

    form {
        max-width: 600px;
        text-align: center;
        margin: 20px auto;
    }

    form input, form textarea {
        border: 0;
        outline: 0;
        padding: 1em;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        display: block;
        width: 100%;
        margin-top: 1em;
        font-family: 'Merriweather', sans-serif;
        -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        resize: none;
    }

    form input:focus, form textarea:focus {
        -moz-box-shadow: 0 0px 2px #e74c3c !important;
        -webkit-box-shadow: 0 0px 2px #e74c3c !important;
        box-shadow: 0 0px 2px #e74c3c !important;
    }

    input[type="submit"] {
        color: white;
        background: #e74c3c;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        -moz-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
        -webkit-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
        box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
    }
    form textarea {
        height: 126px;
    }



</style>