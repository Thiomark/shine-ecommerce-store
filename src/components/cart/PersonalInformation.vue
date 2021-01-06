<template>
    <form class="cart-total-container">
        <div class="cart-total-wrapper">
            <div class="rows">
                <label class="required" for="firsy-name">First name</label>
                <input class="requiredw" type="text" v-model="firstName">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Last name</label>
                <input class="requiredw" type="text" v-model="lastName">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Country / Region</label>
                <input type="text" placeholder="Apartment, suite, unit, etc (optional)">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Street address</label>
                <input type="text" placeholder="House number and street name">
            </div>
            <div class="row">
                <label for="firsy-name">Apartment, suite, unit, etc. (optional)</label>
                <input type="text">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Town / Street</label>
                <input type="text">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Province</label>
                <input type="text">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Postalcode / ZIP</label>
                <input type="text">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Phone number</label>
                <input type="text">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Email</label>
                <input type="email">
            </div>
        </div>
        <div class="cart-total-wrapper-bottom">
            <input type="checkbox" id="periph1" name="peripherals" value="screen">
            <label for="periph1">Create an account?</label>
            <textarea  cols="30" rows="10" placeholder="Special notes about the order"></textarea>
            <input @click="goToCheckout" type="button" value="place order">
        </div>
    </form>
</template>

<script>
    export default {
        name: 'PersonalInformation',
        props: {
            subtotal: {
                type: Number
            },
            shipping: {
                type: Number
            },
            total: {
                type: Number
            }
        },
        methods: {
            goToCheckout(){
                this.$emit('gotocheckout')
            }
        },
    }
</script>

<style scoped>

    @media (max-width: 600px){

        .cart-total-wrapper {
            display: flex;
            flex-direction: column;
            /* grid-template-columns: 1fr;
            column-gap: 30px; */
        }

        .cart-total-container  {
            padding-bottom: 5em;
        }

        
        
    }

    
    @media (min-width: 600px){

        .cart-total-wrapper {
            grid-template-columns: 1fr 1fr;
            column-gap: 30px;
        }
    }

    label {
        color: #303133;
        font-size: .7rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .required::after {
        content: "*";
        color: rgb(255, 38, 38);
        font-size: .9rem;
        padding-left: 6px;
    }

    .cart-total-container {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 3em;
    }

    .cart-total-wrapper {
        width: 100%;
        display: grid;
        border-radius: 4px;
        padding: 0 2em;
        
    }

    .cart-total-wrapper-bottom {
        width: 100%;
        border-radius: 4px;
        padding: 0 2em;
    }

    input[type="checkbox"]{
        margin: 2em 1em;
    }

    input[type="text"], input[type="email"], textarea {
        padding: 19px 15px;
        box-shadow: rgba(0, 0, 0, 0.024) 0px 2px 1px 0px inset;
        background-color: #f7f7f7;
        width: 100%;
        color: #777777;
        margin: .5em 0;
        font-size: .9em;
        border-radius: 5px;
        border: none;
        font-family: 'Roboto', sans-serif;
    }

    input[type="button"] {
        margin-top: 1em;
        color: #dfdfdf;
        padding: 1.5em ;
        width: 100%;
        background-color: #303133;
        text-transform: uppercase;
        border-radius: 4px;
        border: none;
        font-size: 13px;
        max-width: 200px;
    }

    

    

    @media (max-width: 500px) {
        input[type="button"] {
            width: 100%;
        }
    }

    @media (max-width: 500px) {
        input[type="button"] {
             max-width: 1100px;
             float: right;
        }
    }

</style>