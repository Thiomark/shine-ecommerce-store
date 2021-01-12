<template>
    <div @mouseover="showButtons" @mouseleave="hideButtons" @click="navigateToTheProduct" class="product-container">
        <div class="skeletonImage" v-if="!productImage">
            <Skeleton height="12em"/>
        </div>
        <div v-if="productImage" class="image-shape image-position"
            :style="{'background-image': `url('${productImage}')`}"
            >   
            <i @mouseover="disableNavigation" @mouseleave="disableNavigation" @click="addItemToFavourite({price, title, productImage, productID})" class="far fa-heart" :style="{opacity: buttonOpacity}"></i>
            <input @mouseover="disableNavigation" @mouseleave="disableNavigation" @click="addItemToCart({price, title, productImage, productID})" type="button" :style="{opacity: buttonOpacity}" value="add to cart">
        </div>
        <div class="product-info">
            <Skeleton class="skeleton" v-if="!price" height="2em"/>
            <Skeleton v-if="!title" height="1em"/>
            <h1 v-if="price" >R {{price}}</h1>
            <h2 v-if="title" >{{title}}</h2>
        </div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex'
    import Skeleton from '../extra/Skeleton'

    export default {

        name: "Product", 
        components: {
            Skeleton
        },
        props: {
            productImage: {
                type: String
            },
            title: {
                type: String
            },
            price: {
                type: Number
            },
            productID: {
                type: String
            },
        },
        data() {
            return {
                buttonOpacity: 0,
                navigateToADiffrentPage: true,
                navigaion: true
            }
        },
        methods: {
            ...mapActions(['addedItemToCart', 'addedItemToFavouritesCart']),
            showButtons(){
                return this.buttonOpacity = 1
            },
            hideButtons(){
                this.buttonOpacity = 0
            },
            disableNavigation(){
                this.navigaion = !this.navigaion
            },
            navigateToTheProduct(){   
                if(this.navigaion){
                    this.$router.push({
                        name: 'SingleProduct',
                        params: { productID: this.productID }
                    })
                } 
            },
            addItemToCart(item){
                const {price, title, productImage, productID} = item

                for(const product of this.$store.state.itemsInShoppingCart){
                    if(product.productID === productID){
                        return
                    }
                }
                this.addedItemToCart({price, title, productImage, productID, quantity: 1, totalPrice:  price})
            },
            addItemToFavourite(item){
                const {price, title, productImage, productID} = item

                for(const product of this.$store.state.itemsInFavouriteCart){
                    if(product.productID === productID){
                        return
                    }
                }
                this.addedItemToFavouritesCart({price, title, productImage, productID, quantity: 1, totalPrice:  price})
            }
        }
    }

</script>

<style scoped>

    .skeleton {
        margin-bottom: .5em;
    }

    .skeletonImage {
        padding: .5em;
    }

    h1, h2 {
        text-transform: capitalize;
        color: rgb(94, 94, 94);
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-weight: 500;
        font-size: 1rem;
    }
    h2 {
        font-weight: 400;
        font-size: .9rem;
    }

    .product-info {
    
        display: grid;
        grid-template-columns: 1fr;
        margin: .4em 0 .6em 0;
        border-radius: .3em;
        padding: .8em .8em;
        -moz-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        -webkit-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
    }

    .image-position {
        position: relative;
        /* background-image: url('https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'); */
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        cursor: pointer;
        border-radius: .3em;
        -moz-box-shadow: rgba(17, 17, 18, 0.068) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        -webkit-box-shadow: rgba(17, 17, 18, 0.068) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        box-shadow: rgba(17, 17, 18, 0.068) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
    }

    .image-shape:after {
        
        content: "";
        padding-bottom: 110%;
        display: inline-block;
        vertical-align: top;
    }

    .product-container {
        
        /* max-width: 20em; */
        
        
        display: flex;
        flex-direction: column;
    }

    .fa-heart, input {
        position: absolute;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }


    .fa-heart {
        -moz-box-shadow: rgba(17, 17, 18, 0.068) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        -webkit-box-shadow: rgba(17, 17, 18, 0.068) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        box-shadow: rgba(17, 17, 18, 0.068) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        top: 1em;
        right: 1em;
        color: rgb(212, 212, 212);
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
    }

    .fa-heart:hover {
        color: rgb(231, 37, 37);
    }

    input {
        z-index: 12;
        border-radius: 5px;
        background-color: rgb(22, 22, 22);
        color: rgb(212, 212, 212);
        font-weight: bold;
        font-size: .8rem;
        padding: 1em;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        bottom: 1em;
        border: 1px solid rgb(119, 119, 119);
        transition: width 0.2s ease-in-out;
    }

    input:hover {
        width: 95%;
        cursor: pointer;
    }

    
</style>



