<template>
    <div class="cart-container" :style="{paddingBottom: `${footerHeight}px`}">
        <div v-if="getitemsInShoppingCart.length === 0" class="empty-cart">
            <h1>Cart is Empty</h1>
            <input @click="navigate('Home')" type="button"  value="Go To Products">
        </div>
        <div class="items-in-a-cart">
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
        <div v-if="getitemsInShoppingCart.length > 0" class="coupon-code">
            <input type="text" placeholder="Coupon code">
            <input type="button" value="apply coupon">
        </div>
        <CartTotal :style="{paddingBottom: `${footerHeight}px`}" 
            class="add-padding" v-if="getitemsInShoppingCart.length > 0" 
            :subtotal="getToalCost()" 
            :shipping="getShippingCost()" 
            :total="getTotalCostWithShipping()" 
        />
    </div>
</template>

<script>

    import CartTotal from '../components/cart/CartTotal'
    import { mapActions, mapGetters } from 'vuex'
    import ItemsInCart from '../components/cart/ItemsInCart'

    export default {
        name: "Cart",
        components: {
            CartTotal,
            ItemsInCart
        },
        data() {
            return {
                products: [],
                footerHeight: null,
                
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