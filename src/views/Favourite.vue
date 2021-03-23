<template>
    <div class="cart-container" :style="{paddingBottom: `${getFooterHeight}px`}">
        <div v-if="getItemsInFavCart.length === 0" class="empty-cart">
            <h1>No Items Added Yet</h1>
            <input @click="navigate('Home')" type="button"  value="Go To Products">
        </div>
        <div>
            <FavouriteItems :product="product" v-for="product in getItemsInFavCart" :key="product._id" />
        </div>
         <FavouriteTotal v-if="getItemsInFavCart.length !== 0"/>
    </div>
</template>

<script>

  
    import { mapGetters, mapMutations } from 'vuex'
    import FavouriteItems from '../components/favourites/FavouriteItems'
    import FavouriteTotal from '../components/favourites/FavouriteTotal'

    export default {
        name: "Favourite",
        components: {
            FavouriteTotal,
            FavouriteItems,
        },
        data() {
            return {
                products: [],
                footerHeight: null,
                checkOutItems: null
            }
        },
        methods: {
            ...mapMutations(['removeFromCart']),
            removeItem(payload){
                this.removeFromCart(payload)
            },
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
        },
        computed: mapGetters(['getItemsInFavCart', 'getItemsInFavCart', 'getFooterHeight'])
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
        font-size: 1rem;
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