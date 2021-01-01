<template>
    <div class="cart-container">
        <table class="cart-table">
            <thead>
                <tr>
                    <th>product</th>
                    <th>name</th>
                    <th>unit price</th>
                    <th>quantity</th>
                    <th>total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in products" :key="index">
                    <td><img :src="item.productImage" alt=""></td>
                    <td>{{item.name}}</td>
                    <td>R {{item.price}}</td>
                    <td><input type="number" :value="item.quantity"></td>
                    <td>R {{item.totalPrice}}</td>
                </tr>
            </tbody>
        </table>
        <div class="shipping-total">
            <h1>Cart Total</h1>
            <div class="total-price">
                <h2>Toal</h2>
                <h2>R 3000</h2>
            </div>
            <input type="button" value="proceed to checkout">
        </div>
    </div>
</template>

<script>

    export default {
        name: "Cart",
        data() {
            return {
                products: [
                    {
                        productImage: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                        name: 'Basic Shirt',
                        price: 130.00,
                        quantity: 1,
                        totalPrice: 130.00
                    },
                    {
                        productImage: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                        name: 'Basic Shirt',
                        price: 130.00,
                        quantity: 1,
                        totalPrice: 130.00
                    },
                    {
                        productImage: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                        name: 'Basic Shirt',
                        price: 130.00,
                        quantity: 1,
                        totalPrice: 130.00
                    }
                ]
            }
        },
    }

</script>

<style scoped>

    .cart-container {
        width: 100%;
        min-height: 100vh;
        /* display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3em; */
        max-width: 1100px;
        margin: 8em auto 2em auto;
    
    }

    thead th {
        text-transform: uppercase;
        padding-bottom: 1em;
        border-bottom: 1px solid rgb(230, 230, 230);
    }

    table{
        /* border-collapse: separate; */

        /* margin: 10px auto; */
        display: table;
        width:100%;
        height: auto;
        /* border-collapse: collapse; */
        text-align: center;


    }

    tr td img {
        width: 60px;
        border-radius: 3px;
    }

    td {
        padding: 1em;
        border-bottom: 1px solid rgb(230, 230, 230);
    }

    input[type="number"] {
        /* padding: 1.4em 2em; */
        border: 1px solid rgb(165, 165, 165);
        width: 4em;
        height: 4em;
        color: black;
        font-weight: bold;
        font-size: .8rem;

        text-align: center;
        justify-content: center;
    }

    .shipping-total {
        padding: 2em;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.4); 
        box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.4);
        margin: 3em auto;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        
    }

    .shipping-total h1 {
        font-size: 1.1em;
        color: rgb(70, 70, 70);
        font-weight: 400;
    }

    .shipping-total h2 {
        font-weight: 400;
        font-size: 1em;
        color: rgb(70, 70, 70);
    }

    .total-price {
        display: flex;
        border: 1px solid rgb(231, 231, 231);
        padding: 1em ;
        margin: 1em 0;
        justify-content: space-between;
    }

    .shipping-total input {
        padding: 1.3em;
        border-radius: 3px;
        border: none;
        text-transform: uppercase;
        font-size: .7rem;
        background-color: rgb(179, 179, 179);
        font-weight: bold;
        -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.4); 
        box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.4);
    }



</style>