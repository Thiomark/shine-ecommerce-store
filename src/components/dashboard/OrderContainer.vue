<template>
    <div  class="order-container-container">
        <ul>
            <li><h1>Order No.</h1></li>
            <li><h1>Name</h1></li>
            <li><h1>Address</h1></li>
            <li><h1>Date<i class="fas fa-caret-down"></i></h1></li>
            <li><h1>Price<i class="fas fa-caret-down"></i></h1></li>
        </ul>
        <OrderTemplate 
            v-for="order in orderContainer" :key="order._id"
            :orderNumber="order.orderNumber"
            :firstName="order.firstName"
            :lastName="order.lastName"
            :address="order.address"
            :city="order.town"
            :province="order.province"
            :date="order.createdAt"
            :totalPrice="order.toatlAmount"
        />
    </div>
</template>

<script>

    // import OrderTemplate from 'OrderTemplate'
    import OrderTemplate from '../dashboard/OrderTemplate'
    import OrderService from '../../services/OrderService'
    import {mapActions} from 'vuex'

    export default {
        name: "OrderContainer",
        components: {
            OrderTemplate
        },
        data() {
            return {
                orderContainer: []
            }
        },
        methods: {
            ...mapActions(['setLoadingPage'])
        },
        async created() {
            this.setLoadingPage(true)
            const response = await OrderService.get()
            await this.setLoadingPage(false)
            this.orderContainer = response.data.fetcheQuerys
        },
    }

</script>

<style scoped>

    @media (max-width: 600px){
        ul {
            display: none;
        }
    }

    .order-container-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 1em;
        overflow-x: hidden;
    }

    @media (min-width: 600px){
        ul {
        display: grid;
        grid-template-columns: 70px 170px auto 200px 80px;
        width: 100%;
        border-radius: 5px;
        padding: .7em 1em;
        background-color: rgb(250, 250, 250);
        -webkit-box-shadow: 0px 6px 5px -4px rgba(0,0,0,0.22); 
        box-shadow: 0px 6px 5px -4px rgba(0,0,0,0.22);
        
        }

        h1 {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 13px;
            color: #1b1b1b;
        }

        .fa-caret-down {
            padding-left: .9em;
            cursor: pointer;
        }
    }



</style>