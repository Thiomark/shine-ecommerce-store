<template>
    <div @mouseover="showButtons" @mouseleave="hideButtons" @click="navigate" class="product-container">
        <div class="image-shape image-position"
            :style="{'background-image': `url('${productImage}')`}"
            >   
            <i @mouseover="showButtons" class="far fa-heart" :style="{opacity: buttonOpacity}"></i>
            <input @mouseover="showButtons" type="button" :style="{opacity: buttonOpacity}" value="add to cart">
        </div>
        <h1 class="title-and-price">{{title}} - R {{price}}</h1>
        <!-- <div class="product-info">
            <h1>R {{price}}</h1>
            <h1>{{title}}</h1>
        </div> -->
    </div>
</template>

<script>

    export default {

        name: "Product",
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
            }
        },
        data() {
            return {
                buttonOpacity: 0
            }
        },
        methods: {
            showButtons(){
                return this.buttonOpacity = 1
            },
            hideButtons(){
                this.buttonOpacity = 0
            },
            navigate() {
                console.log('gg')
                this.$router.push({
                    name: 'SingleProduct',
                    params: { productID: this.productID }
                })
            }
        }
    }

</script>

<style scoped>

    h1 {
        text-transform: capitalize;
        color: rgb(94, 94, 94);
        font-size: 1rem;
        font-weight: 400;
        align-self: center;
        
    }

    .title-and-price {
        margin: 1em 0;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: .4em 0 2em 0;
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
    }

    .image-shape {
        content: "";
        padding-bottom: 130%;
        display: inline-block;
        vertical-align: top;
    }

    .product-container {
        max-width: 20em;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
    }

    .fa-heart, input {
        position: absolute;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    /* .fa-heart:hover, input:hover {
        opacity: 1;
    } */

    .fa-heart {
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



