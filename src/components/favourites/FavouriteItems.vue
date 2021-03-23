<template>
    <div class="item-container">
        <div class="cart-total-wrapper">
            <div class="subtotal all">
                <img :src="product.image" :alt="product.title">
            </div>
            <div class="subtotal all">
                <h1 class="for-mobile">Name</h1>
                <h1>{{product.title}}</h1>
            </div>
            <div class="total all">
                <h1 class="for-mobile">Price</h1>
                <h1>R {{product.productCost}}</h1>
            </div>
            <div class="shipping all">
                <input @click="moveItemToCart(product._id)" type="button" value="Move to cart">
            </div>
            <div class="total all hide-for-mobile">
                <a @click="removeItemFromFavCart(product._id)" href="javascript:void(0)">&times;</a>
            </div>
            <input class="removeItem" @click="removeItemFromFavCart(product._id)" type="button" value="Remove Item">
        </div>
    </div>
</template>

<script>

    import { mapMutations } from 'vuex'
    
    export default {
        name: "ItemsInCart",
        props: {
            product: {
                type: Object
            },
        },
        methods: {
            ...mapMutations(['removeItemFromFavCart', 'addItemToCart']),
            moveItemToCart(productID){
                this.addItemToCart(productID)
                this.removeItemFromFavCart(productID)
            }
        },
    }
</script>

<style scoped>

     .header {
        color: #303133;
        font-size: 1.5rem;
        padding-bottom: 1em;
        font-family: 'Poppins', sans-serif;
    }

    .item-container {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        margin: 1em 0;
    
    }

    .cart-total-wrapper {
        width: 100%;
        border-radius: 4px;
        padding: 2em;

    }

    input {
        color: #dfdfdf;
        padding: 1.5em ;
        width: 100%;
        background-color: #303133;
        text-transform: uppercase;
        border-radius: 4px;
        border: none;
        font-size: 13px;
        /* max-width: 200px; */
    }

    .all {
        padding: .7em 0;
        justify-content: space-between;
        display: flex;
    }

    hr {
        opacity: .2;
    }

    .all h1 {
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #303133;
    }

    @media (max-width: 500px) { 
        .hide-for-mobile {
            display: none;
        }
    }

    @media (min-width: 600px) {

        .for-mobile {
            display: none;
        }

        .hide-for-mobile a{
            font-size: 1.7em;
            color: #242424;
        }

        .cart-total-wrapper {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            width: 100%;

            /* border-bottom: 1px solid rgb(219, 219, 219); */
            padding: 0 ;
            place-items: center;
        }

        /* .item-container {
            padding: 0 2.6em;
        } */

        img {
            width: 60px;
            max-height: 80px;
        }

        .all {
            display: flex;
            align-items: center;
        }

        .removeItem {
            display: none;
        }
    }

    @media (max-width: 500px) {
        input {
            width: 100%;
        }

        img {
            width: 60%;
            margin: auto;
        }

    }

    @media (min-width: 500px) {
        input {
             max-width: 1100px;
             float: right;
        }
    }

</style>