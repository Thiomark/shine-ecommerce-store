<template>
    <div class="cart-total-container">
        <div class="cart-total-wrapper">
            <h1 class="header">Cart Total</h1>
            <hr>
            <div class="subtotal all">
                <h1>Subtotal</h1>
                <h1>R {{subtotal}}</h1>
            </div>
            <hr>
            <div class="shipping all">
                <h1>Shipping</h1>
                <h1>R {{shipping}}</h1>
            </div>
            <hr>
            <div class="total all">
                <h1>Total</h1>
                <h1>R {{total}}</h1>
            </div>
            <input v-if="showCheckout" @click="submitTotal" type="button" value="Proceed to checkout">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartTotal',
        props: {
            subtotal: {
                type: Number
            },
            shipping: {
                type: Number
            },
            total: {
                type: Number
            },
            showCheckout: {
                type: Boolean
            }
        },
        methods: {
            submitTotal(){
                this.$emit('emitproceed')
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

    .cart-total-container {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        padding: 2em;
        margin-bottom: 1em;
    }

    .cart-total-wrapper {
        width: 100%;
        background-color: #f7f7f7;
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
    }

    .all {
        padding: 2em 0;
        justify-content: space-between;
        display: flex;
    }

    hr {
        opacity: .2;
    }

    .all h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #303133;
    }

    @media (min-width: 500px) {
        input {
            max-width: 200px;
        }
    }

    @media (max-width: 500px) {
        input {
            width: 100%;
        }
    }



</style>