<template>
    <div class="product-information">
        <h1>{{title}}</h1>
        <h2>R {{price}}</h2>
        <p>{{description}}</p>
        <div class="quantity">
            <!-- <input v-model.number="productQuantity" type="number" min="1" > -->
            <input type="button" @click="addToCart({price, title, productImage, productID})" value="add to cat">
            <input type="button" @click="navigate('Cart')" value="buy now">
        </div>
        <div class="wishlist">
            <i @click="addItemToFavourite" class="far fa-heart"></i>
            <a @click="addItemToFavourite" href="javascript:void(0)">Add to Wishlist</a>
        </div>
        <hr>
        <div class="product-tags">
            <h1 v-if="categories">Categories</h1>
            <div v-if="categories" class="categories">
                <a v-for="(item, index) in categories" :key="index" href="javascript:void(0)">{{item}},</a>
            </div>
            <h1>Tags</h1>
            <div class="categories">
                <a v-for="(item, index) in tags" :key="index" href="javascript:void(0)">{{item}},</a>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    
    export default {
        name: "SelectProduct",
        props: {
            title: {
                type: String
            },
            price: {
                type: Number
            },
            description: {
                type: String
            },
            tags: {
                type: Array
            },
            categories: {
                type: Array
            },
            productImage: {
                type: String
            },
            productID: {
                type: String
            }
        },
        data() {
            return {
                item: {
                    id: this.$route.params.id,
                    productTitle: '',
                    productPrice: 0,
                   // productQuantity: 1
                },
                productQuantity: 1
            }
        },
        methods: {
            ...mapActions(['addedItemToCart', 'addedItemToFavouritesCart']),

            addToCart(item){

                const {price, title, productImage, productID} = item

                for(const product of this.$store.state.itemsInShoppingCart){
                    if(product.productID === productID){
                        return
                    }
                }
                const totalPrice =  price * parseInt(this.productQuantity, 10)
                this.addedItemToCart({price, title, productImage, productID, quantity: this.productQuantity, totalPrice })
            },
            addItemToFavourite(item){
                const {price, title, productImage, productID} = item

                for(const product of this.$store.state.itemsInFavouriteCart){
                    if(product.productID === productID){
                        return
                    }
                }
                this.addedItemToFavouritesCart({price, title, productImage, productID, quantity: 1, totalPrice:  price})
            },
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
        }
    }
</script>

<style scoped>

    .categories a {
        padding-right: 1em;
    }

    .product-information {
        width: 100%;
        height: 100%;
        padding: 2em;
    }
    .product-information h1 {
        color: rgb(75, 75, 75);
        font-size: 1.8rem;
    }

    .product-information h2 {
        color: rgb(214, 80, 80);
        font-weight: 500;
        font-size: 1.4rem;
        margin: .7em 0;
    }

    p {
        color: rgb(102, 102, 102);
        font-size: 1rem;
        margin-bottom: 1.3em;
        line-height: 2;
        font-weight: 400;
    }

    input {
        padding: 1.9em 2em;
        border: 1px solid rgb(165, 165, 165);
        width: 100%;
        color: black;
        font-weight: bold;
        font-size: .7rem;
        background-color: rgb(44, 44, 44);
        border-radius: 6px;
    }

    input[type="button"] {
        color: rgb(238, 238, 238);
        border: none;
        text-transform: uppercase;
    }

    .quantity {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1em;
    } 

   .wishlist {
        display: flex;
        margin-bottom: 1.4em;
    }
    .wishlist {
        padding-top: 2em;
        align-items: center;
    }

    .wishlist a, .product-tags a{
        font-size: 1em;
        color: rgb(109, 109, 109);
    }

    .fa-heart {
        color: rgb(109, 109, 109);
        cursor: pointer;
        font-size: 1.4em;
    }

    .fa-heart:hover {
        color: rgb(231, 37, 37);
    }

    .wishlist a {
        margin-left: 1em;
    }

    .categories a {
        text-transform: capitalize;
    }

    .product-tags {
        margin: 1.5em 0;
        display: grid;
        width: 100%;
        grid-column-gap: 1.5em;
        grid-row-gap: 1em;
        grid-template-columns: 6em auto;
    }

    .categories {
        display: flex;
    } 

    .product-tags h1{
        color: rgb(26, 26, 26);
        font-weight: 500;
        font-size: 1rem;
    }

    hr {
        opacity: 0.3;
    }   

</style>