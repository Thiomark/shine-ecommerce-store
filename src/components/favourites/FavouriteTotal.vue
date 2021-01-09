<template>
    <div class="cart-total-container">
        <div class="cart-total-wrapper">
            <h1 class="header">Amount</h1>
            <hr>
            <div class="total all">
                <h1>Total</h1>
                <h1>R {{getFavouriteCartCost}}</h1>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: 'CartTotal',
        methods: {
            submitTotal(){
                this.$emit('emitproceed')
            }
        },
        computed: mapGetters(['getFavouriteCartCost'])
        
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




</style>