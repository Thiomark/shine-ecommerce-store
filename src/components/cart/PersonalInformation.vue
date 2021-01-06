<template>
    <form @submit.prevent="goToCheckout" class="cart-total-container">
        <div class="cart-total-wrapper">
            <div v-for="(field, index) in fields" :key="index" class="rows">
                <label class="required" for="firsy-name">{{field.for}}</label>
                <input type="text" :required="field.filedRequired"  v-model="field.value" :placeholder="field.placeholder">
            </div>
            <div class="row">
                <label class="required" for="firsy-name">Email</label>
                <input type="email" v-model="email">
            </div>
        </div>
        <div class="cart-total-wrapper-bottom">
            <input type="checkbox" id="periph1" name="peripherals" value="screen">
            <label for="periph1">Create an account?</label>
            <textarea v-model="notes"  cols="30" rows="10" placeholder="Special notes about the order"></textarea>
            <input type="submit" value="place order">
        </div>
    </form>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import OrderService from '../../services/OrderService'
    export default {
        name: 'PersonalInformation',
        data() {
            return {
                fields: [
                    {
                        name: "firstName", 
                        value: '',
                        for: 'First name',
                        filedRequired: true
                    },
                    {
                        name: "lastName", 
                        value: '',
                        for: 'Last name',
                        filedRequired: true
                    },
                    {
                        name: "address", 
                        value: '',
                        placeholder: "House number and street name",
                        for: 'Street address',
                        filedRequired: true
                    },
            
                    {
                        name: "houseNumber", 
                        value: '',
                        placeholder: "Apartment, suite, unit, etc. (optional)",
                        for: 'Apartment, suite, unit, etc. (optional)',
                        notRequired: true,
                        filedRequired: false
                    },
                    {
                        name: "town", 
                        value: '',
                        for: 'Town / City',
                        filedRequired: true
                    },
                    {
                        name: "province", 
                        value: '',
                        for: 'Province',
                        filedRequired: true
                    },
                    {
                        name: "phoneNumber", 
                        value: '',
                        for: 'Phone Number',
                        filedRequired: true
                    },
                    {
                        name: "zipcode", 
                        value: '',
                        for: 'Zipcode',
                        filedRequired: true
                    },
                    
                ],
                email: '',
                notes: ''
            }
        },
        methods: {
            ...mapActions(['setLoadingPage', 'setRequestFeedBack', 'restItemsInShoppingCart']),
            ...mapGetters(['getTotalCostWithShipping', 'getShippingCost', 'getitemsInShoppingCart']),
            async goToCheckout(){
                
                this.setLoadingPage(true)
                try {
                    const order = await OrderService.post({
                        firstName: this.fields[0].value,
                        lastName: this.fields[0].value,
                        address: this.fields[0].value,
                        houseNumber: this.fields[0].value,
                        town: this.fields[0].value,
                        province: this.fields[0].value,
                        phoneNumber: this.fields[0].value,
                        zipcode: this.fields[0].value,
                        notes: this.notes,
                        email: this.email,
                        item: this.getitemsInShoppingCart(),
                        shipping: this.getShippingCost(),
                        toatlAmount: this.getTotalCostWithShipping()
                    })
                    // this.setRequestFeedBack({
                    //     firstName: this.fields[0].value,
                    //     lastName: this.fields[1].value,
                    //     address: this.fields[2].value,
                    //     houseNumber: this.fields[3].value,
                    //     town: this.fields[4].value,
                    //     province: this.fields[5].value,
                    //     phoneNumber: this.fields[6].value,
                    //     zipcode: this.fields[7].value,
                    //     notes: this.notes,
                    //     email: this.email,
                    //     item: this.getitemsInShoppingCart(),
                    //     shipping: this.getShippingCost(),
                    //     toatlAmount: this.getTotalCostWithShipping()
                    // })
                    this.setLoadingPage(false)
                    this.restItemsInShoppingCart([])
                    this.$emit('gotocheckout', order.data.order)
                } catch (error) {
                    this.setLoadingPage(false)
                    this.setRequestFeedBack(error)
                }
            }
        },
    }
</script>

<style scoped>

    /* .filedMissing {
        background-color: #eca4a5;
    }
    .success {
        
    }

    textarea {
        background-color: #f7f7f7;
    } */

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
        background-color: #f7f7f7;
        box-shadow: rgba(0, 0, 0, 0.024) 0px 2px 1px 0px inset;
        width: 100%;
        color: #777777;
        margin: .5em 0;
        font-size: .9em;
        border-radius: 5px;
        border: none;
        font-family: 'Roboto', sans-serif;
    }

    input[type="submit"] {
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