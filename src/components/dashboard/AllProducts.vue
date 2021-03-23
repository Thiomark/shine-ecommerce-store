<template>
    <div class="item-container">
        <div class="cart-total-wrapper">
            <div class="subtotal all">
                <img :src="productImage" alt="">
            </div>
            <div class="subtotal all">
                <h1 class="for-mobile">Name</h1>
                <h1>{{name}}</h1>
            </div>
            <div class="shipping all">
                <h1 class="for-mobile">Price</h1>
                <h1>R {{unitPrice}}</h1>
            </div>
            <div class="total all hide-for-mobile">
                <a @click="emitRemoveEvent({productID, event: 'delete'})" href="javascript:void(0)"><i class="far fa-trash-alt"></i></a>
            </div>
            <div class="total all hide-for-mobile">
                <a @click="emitRemoveEvent({productID, event: 'edit'})" href="javascript:void(0)"><i class="far fa-edit"></i></a>
            </div>
            <input @click="emitRemoveEvent({productID, event: 'delete'})" type="button" value="Remove Item">
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "ItemsInCart",
        props: {
            productID: {
                type: String
            },
            name: {
                type: String
            },
            unitPrice: {
                type: Number
            },
            quantity: {
                type: Number
            },
            totalPrice: {
                type: Number
            },
            productImage: {
                type: String
            }
        },
        methods: {
            ...mapActions(['addSelectPopupMessage']),
            ...mapGetters(['getSelectPopupConfirm']),
            emitRemoveEvent(productID){
                this.addSelectPopupMessage = "Are you sure you want to remove the product"
                console.log(productID)
                // if(this.getSelectPopupConfirm){
                //     this.$emit('emitremoveevent', productID)
                // }
            }
        },
    }
</script>

<style scoped>

    .far {
        font-size: 1.4rem;
    }

    .far:hover {
        color: rgb(50, 138, 165);
    }

     .header {
        color: #303133;
        font-size: 1.5rem;
        padding-bottom: 1em;
        font-family: 'Poppins', sans-serif;
    }

    .item-container {
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }

    .cart-total-wrapper {
        width: 100%;
        border-radius: 4px;
        padding: 2em;
 
    }

    input {
        color: #dfdfdf;
        padding: 1.5em ;
        width: 100%;
        background-color: #303133;
        text-transform: uppercase;
        border-radius: 4px;
        border: none;
        font-size: 13px;
        /* max-width: 200px; */
    }

    .all {
        padding: .7em 0;
        justify-content: space-between;
        display: flex;
    }

    hr {
        opacity: .2;
    }

    .all h1 {
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #303133;
    }

    @media (max-width: 500px) { 
        .hide-for-mobile {
            display: none;
        }
    }

    @media (min-width: 600px) {

        .for-mobile {
            display: none;
        }

        .hide-for-mobile a{
            font-size: 1.7em;
            color: #242424;
        }

        .cart-total-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            width: 100%;

            /* border-bottom: 1px solid rgb(219, 219, 219); */
            padding: 0 ;
            place-items: center;
        }

        /* .item-container {
            padding: 0 2.6em;
        } */

        img {
            width: 60px;
            max-height: 80px;
        }

        .all {
            display: flex;
            align-items: center;
        }

        input {
            display: none;
        }
    }

    @media (max-width: 500px) {
        input {
            width: 100%;
        }

        img {
            width: 60%;
            margin: auto;
        }

    }

    @media (min-width: 500px) {
        input {
             max-width: 1100px;
             float: right;
        }
    }

</style>