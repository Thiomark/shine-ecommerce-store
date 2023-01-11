<template>
    <div class="product-container">
        <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" srcset="">
        <div class="summary"> 
            <h1>Cordela Blouse</h1>
            <h1>R 300.00</h1>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ProductComponent", 
        props: {
            
        },
        data() {

        },
        methods: {
            
        }
    }

</script>

<style scoped>

    .product-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .product-container img {
        max-height: 25em;
    }

    .product-container .summary {
        padding: .6em;
        display: flex;
        flex-direction: column;
        gap: .6em; 
        margin-top: .3em;
    }

    .product-container h1 {
        font-size: 1rem;
        font-weight: 300;
        text-align: center;
    }
</style>