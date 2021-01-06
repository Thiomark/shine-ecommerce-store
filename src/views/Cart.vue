<template>
    <div class="cart-container" :style="{paddingBottom: `${footerHeight}px`}">
        <div v-if="getitemsInShoppingCart.length === 0" class="empty-cart">
            <h1>Cart is Empty</h1>
            <input @click="navigate('Home')" type="button"  value="Go To Products">
        </div>
        <CheckoutProcessBar 
            v-if="getitemsInShoppingCart.length > 0"
            :confirmOrder="confirmOrder" 
            :yourDetails="yourDetails"
            :checkOut="checkOut" 
        />
        <PersonalInformation v-if="yourDetails && !checkOut" @gotocheckout="goToCheckOut" />
        <div v-if="!yourDetails && !checkOut" class="items-in-a-cart">
            <ItemsInCart
                :productImage="product.productImage"
                :totalPrice="product.totalPrice"
                :quantity="product.quantity"
                :unitPrice="product.price"
                :name="product.title"
                :productID="product.productID"
                @emitremoveevent="removeItem"
                v-for="product in getitemsInShoppingCart" :key="product.productID"
            />
            
        </div>
        <div  v-if="getitemsInShoppingCart.length > 0 && !yourDetails && !checkOut" class="coupon-code">
            <input type="text" placeholder="Coupon code">
            <input type="button" value="apply coupon">
        </div>
        <CartTotal v-if="getitemsInShoppingCart.length > 0 && !yourDetails && !checkOut" :style="{paddingBottom: `${footerHeight}px`}" 
            class="add-padding"
            :subtotal="getToalCost()" 
            :shipping="getShippingCost()" 
            :total="getTotalCostWithShipping()" 
            @emitproceed="goToTheNextPage"
        />
        <OrderPlaced v-if="checkOut" @eventemitted="navigate"/>
    </div>
</template>

<script>

    import CartTotal from '../components/cart/CartTotal'
    import { mapActions, mapGetters } from 'vuex'
    import ItemsInCart from '../components/cart/ItemsInCart'
    import CheckoutProcessBar from '../components/cart/CheckoutProcessBar'
    import PersonalInformation from '../components/cart/PersonalInformation'
    import OrderPlaced from '../components/cart/OrderPlaced'

    export default {
        name: "Cart",
        components: {
            CartTotal,
            ItemsInCart,
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
                checkOut: false
                
            }
        },
        methods: {
            ...mapActions(['removeFromCart', 'setNavbarAndFooter']),
            ...mapGetters(['getFooterHeight', 'getToalCost', 'getTotalCostWithShipping', 'getShippingCost']),
            removeItem(payload){
                this.removeFromCart(payload)
            },
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
            goToTheNextPage(){
                this.yourDetails = true
            },
            goToCheckOut() {
                this.checkOut = true
            }
        },
        mounted() {
            this.footerHeight = this.getFooterHeight()
        },
        computed: mapGetters(['getitemsInShoppingCart']),
        created() {
            this.setNavbarAndFooter(false)
        },
    }

</script>

<style scoped>

    .process {
        display: flex;
        /* background-color: #f1f1f1; */
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

    .coupon-code {
        width: 100%;
        max-width: 1100px;
        padding: 2em;
    }
   
    .coupon-code input {
        width: 100%;
        padding: 19px 15px;
        box-shadow: rgba(0, 0, 0, 0.024) 0px 2px 1px 0px inset;
        background-color: #f7f7f7;
        color: #777777;
        border: none;
        font-size: .9em;
        margin: .5em 0;
        border-radius: 5px;
    }

    .coupon-code input[type="button"] {
        background-color: #9c9c9c;
        color: #f3f3f3;
    }

    @media (max-width: 500px) {
        

    }

    @media(min-width: 600px){

        .coupon-code {
            display: flex;
            width: 100%;
            max-width: 1100px;
            padding: 2em;
        }
        
        .coupon-code input {
            width: 100%;
            margin: 0 .5em ;
            max-width: 200px;
        }

        /* .items-in-a-cart {
            display: grid;
            grid-template-columns: 1fr 1fr;
        } */


    }
    



</style>