<template>
    <div class="cart-container" :style="{paddingBottom: `${getFooterHeight}px`}">
        <div v-if="getItemsInCart.length === 0" class="empty-cart">
            <h1>Cart is Empty</h1>
            <input @click="navigate('Home')" type="button"  value="Go To Products">
        </div>
        <div>
            <ItemsInCart
                :product="product"
                :quantity="1"
                v-for="product in getItemsInCart" :key="product.productID"
            />
        </div>
         <CartTotal v-if="getItemsInCart.length"
            class="add-padding"
            :showCheckout="true"
            :subtotal="getCartAmout" 
            :shipping="getShippingCost" 
            :total="getTotalCostWithShipping" 
            @emitproceed="navigate('Checkout')"
        />
    </div>
</template>

<script>

    import CartTotal from '../components/cart/CartTotal'
    import { mapGetters } from 'vuex'
    import ItemsInCart from '../components/cart/ItemsInCart'

    export default {
        name: "Cart",
        components: {
            CartTotal,
            ItemsInCart,
        },
        data() {
            return {
                products: [],
                checkOutItems: null
            }
        },
        methods: {
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
        },
        computed: mapGetters(['getItemsInCart', 'getTotalCostWithShipping', 'getShippingCost', 'getCartAmout', 'getFooterHeight'])
    }

</script>

<style scoped>

    .empty-cart {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 2em;
    }

    .empty-cart h1{
        text-transform: uppercase;
        align-self: center;
        color: #c9c9c9;
        padding: .5em;
    }

    .empty-cart input{
        background-color: rgb(46, 46, 46);
        color: #c9c9c9;
        padding: 1.3em 3em;
        border-radius: 5px;
        font-size: .7rem;
        max-width: 300px;
        align-self: center;
        border: none;
    }

    .cart-container {
        position: relative;
        width: 100%;
        min-height: 100vh;
        max-width: 1100px;
        padding-top: 5em;
        margin: 0 auto 0 auto;
    }

</style>