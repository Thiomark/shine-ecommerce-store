<template>
    <div class="item-container">
        <div class="cart-total-wrapper">
            <div class="subtotal all">
                <h1 class="for-mobile">Order Number</h1>
                <h1>{{orderNumber}}</h1>
            </div>
            <div class="subtotal all">
                <h1 class="for-mobile">Name</h1>
                <h1>{{firstName}} {{lastName}}</h1>
            </div>
            <div class="shipping all">
                <h1 class="for-mobile">Unit Price</h1>
                <h1>{{address}}, {{city}}, {{province}}</h1>
            </div>
            <div class="shipping all">
                <h1 class="for-mobile">Quantity</h1>
                <h1>{{date}}</h1>
            </div>
            <div class="total all">
                <h1 class="for-mobile">Amount</h1>
                <h1>R {{totalPrice}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderTemplate",
        props: {
            productID: {
                type: String
            },
            firstName: {
                type: String
            },
            lastName: {
                type: String
            },
            address: {
                type: String
            },
            city: {
                type: String
            },
            province: {
                type: String
            },
            date: {
                type: String
            },
            totalPrice: {
                type: Number
            },
            orderNumber: {
                type: Number
            }
        },
        methods: {
            emitRemoveEvent(productID){
                this.$emit('emitremoveevent', productID)
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
    
    }

    .cart-total-wrapper {
        width: 100%;
        border-radius: 4px;
        padding: 2em;
        transition: box-shadow .3s ease-in-out, width .3s ease-in-out;
        cursor: pointer;
    }
    
    .cart-total-wrapper:hover {
        width: 101%;
        -webkit-box-shadow: 0px 6px 15px -2px rgba(0,0,0,0.22); 
        box-shadow: 0px 6px 15px -2px rgba(0,0,0,0.22);
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
        font-weight: 500;
        font-size: 13px;
        color: #1b1b1b;
    }

    @media (min-width: 1113px) {
        .cart-total-wrapper {
            grid-template-columns: auto auto auto auto auto;

        }
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
            grid-template-columns: 70px 170px auto 200px 80px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid rgb(219, 219, 219); 
            padding: .4em 1em;
        }

        /* .item-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
        } */

        img {
            width: 60px;
            max-height: 80px;
        }

        .all {
            display: flex;
            align-items: center;
        }

        input {
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