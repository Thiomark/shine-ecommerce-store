<template>
    <div class="order-container">
        <h1>Thank you!</h1>
        <p>Your order has been placed</p>
        <p>Your oder number is <span>{{orderNumber}}</span></p>
        <div class="details">
            <h2>Items</h2>
            <h2>{{numberOfItems}}</h2>
            <h2>Total</h2>
            <h2>R {{totalAmount}}</h2>
        </div>
        <h3>Estimated delivery <span>{{deleveryDate}}</span></h3>
        <input type="button" @click="eventEmitted('Home')" value="Go to Home">
        <input type="button" @click="eventEmitted('')" value="Track Order">
    </div>
</template>

<script>

    export default {
        name: 'OrderPlaced',
        props: {
            orderNumber: {
                type: Number
            },
            numberOfItems: {
                type: Number
            },
            totalAmount: {
                type: Number
            },
            deleveryDate: {
                type: String
            }
        },
        methods: {
            eventEmitted(event){
                this.$emit('eventemitted', event)
            }
        },
    }

</script>

<style scoped>

    .order-container {
        background-color: #f7f7f7;
        border-radius: 4px;
        width: 100%;
        padding: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 700px;
        margin: 0 auto 3em auto ;

    }

    .details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        width: 100%;
        padding: 1em;
        place-items: center;
        border-bottom: 1px solid rgb(214, 214, 214);
        border-top: 1px solid rgb(214, 214, 214);
        margin: 1.5em 0;
    }

    h1, p, h2, h3 {
        color: rgb(88, 88, 88);
        font-weight: 400;
        padding-bottom: .5em;
    }

    h3 {
        
        font-size: .9rem;
    }

    span {
        font-weight: 600;
        color: black;
    }

    h2{
        font-size: .9rem;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }

    input {
        color: #353535;
        padding: 1em ;
        width: 100%;
        background-color: #c9c9c9;
        text-transform: uppercase;
        border-radius: 4px;
        border: none;
        font-size: 13px;
        max-width: 500px;
        margin: .6em 0;
        font-weight: 600;
    }

    input:last-child{
        background-color: #4BB543;
        color: #dfdfdf;
    }

    



</style>