<template>
    <div class="product-info-container">
        <div class="product-image image-shape"></div>
        <div class="product-information">
            <h1>{{title}}</h1>
            <h2>R {{price}}</h2>
            <p>{{description}}</p>
            <div class="quantity">
                <!-- <input v-model.number="productQuantity" type="number" min="1" > -->
                <input type="button" value="add to cat">
                <input type="button" value="buy now">
            </div>
            <div class="wishlist">
                <i class="far fa-heart"></i>
                <a href="javascript:void(0)">Add to Wishlist</a>
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
    </div>
</template>

<script>
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
            }
        },
        data() {
            return {
                item: {
                    id: this.$route.params.id,
                    productTitle: '',
                    productPrice: 0,
                    productQuantity: '12'
                }
            }
        },
        methods: {
            addToCart(item) {
                this.$store.commit('addToCart', item);
            }
        }
    }
</script>

<style scoped>

    .categories a {
        padding-right: 1em;
    }

    .product-info-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3em;
        max-width: 1100px;
        margin: 10em auto 2em auto;
    }

    /*Image*/

    .product-image {
        position: relative;
        background-image: url('https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
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

    /*Product info*/

    .product-information h1 {
        color: rgb(75, 75, 75);
        font-size: 2.5rem;
        font-weight: 400;
    }

    .product-information h2 {
        color: rgb(75, 75, 75);
        font-size: 1.3rem;
        margin: .7em 0;
        font-weight: 400;
    }

    .wishlist {
        display: flex;
        margin-bottom: 1.4em;
    }

    p {
        color: rgb(75, 75, 75);
        font-size: 13px;
        margin-bottom: 1.3em;
        line-height: 2;
    }

    /*Product Quantity*/

    .quantity {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1em;
    }

    input {
        padding: 1.4em 2em;
        border: 1px solid rgb(165, 165, 165);
        width: 100%;
        color: black;
        font-weight: bold;
        font-size: .8rem;
    }

    input[type="button"] {
        background-color: rgb(53, 53, 53);
        color: rgb(238, 238, 238);
        border: none;
        text-transform: uppercase;
    }

    /*Wish list*/

    .wishlist {
        padding-top: 2em;
        align-items: center;
    }

    .wishlist a, .product-tags a, .fa-heart{
        color: rgb(109, 109, 109);
        font-size: .9em;
    }

    .wishlist a {
        margin-left: 1em;
    }

    /*Product tags*/

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
        color: rgb(75, 75, 75);
        font-weight: bold;
        font-size: .9rem;
    }

    hr {
        opacity: 0.4;
    } 


    

</style>