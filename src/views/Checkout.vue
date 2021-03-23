<template>
    <div class="cart-container" :style="{paddingBottom: `${getFooterHeight}px`}">
        <CheckoutProcessBar 
            :confirmOrder="confirmOrder" 
            :yourDetails="yourDetails"
            :checkOut="checkOut" 
        />
        <CartTotal v-if="!checkOut"/>
        <CouponCode v-if="!checkOut"/>
        <PersonalInformation v-if="!checkOut" @gotocheckout="goToCheckOut" />
        <OrderPlaced 
            v-if="checkOut" 
            @eventemitted="navigate"   
            :deleveryDate="checkOutItems.estimatedDelivery"
            :totalAmount="checkOutItems.toatlAmount"
            :numberOfItems="checkOutItems.item.length"
            :orderNumber="checkOutItems.orderNumber"
        />
    </div>
</template>

<script>

    import CartTotal from '../components/cart/CartTotal'
    import { mapActions, mapGetters } from 'vuex'
    import CouponCode from '../components/cart/CouponCode'
    import CheckoutProcessBar from '../components/cart/CheckoutProcessBar'
    import PersonalInformation from '../components/cart/PersonalInformation'
    import OrderPlaced from '../components/cart/OrderPlaced'

    export default {
        name: "Checkout",
        components: {
            CartTotal,
            CouponCode,
            CheckoutProcessBar,
            PersonalInformation,
            OrderPlaced
        },
        data() {
            return {
                products: [],
                footerHeight: null,
                confirmOrder: true,
                yourDetails: false,
                checkOut: false,
                checkOutItems: null
            }
        },
        methods: {
            ...mapActions(['removeFromCart']),
            removeItem(payload){  
                this.removeFromCart(payload)
            },
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
            goToCheckOut(event) {
                this.yourDetails = true
                this.checkOutItems = event
                this.checkOut = true
            }
        },
        computed: mapGetters(['getitemsInShoppingCart', 'getFooterHeight']),
    }

</script>

<style scoped>

    .process {
        display: flex;
        justify-content: center;
        margin-bottom: 3em;
        border-radius: 6px;
    }

    .confirm-order {
        color: #57a1a3;
        border-right: 4px solid #57a1a3;
        font-weight: bold;
    }

    .Check-out {
        color: #9b9b9b;
        border-right: 4px solid rgb(192, 192, 192);
    }

    .stages {
        background-color: rgb(228, 228, 228);
        display: flex;
        padding: .5em;
        margin-right: 3px;
        
        border-radius: 4px;
    }

    .process h1, h2 {
        
        font-size: .9rem;
        font-weight: 400;
        padding: 0 .5em;
    }


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