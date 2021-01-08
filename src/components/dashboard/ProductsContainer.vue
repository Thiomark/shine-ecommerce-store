<template>
    <div class="products-container">
        <ul>
            <h1>Image</h1>
            <h1>Name</h1>
            <h1>Prixe</h1>
            <h1>Delete</h1>
            <h1>Edit</h1>
        </ul>
        <AllProducts 
            :key="product._id" 
            :productID="product._id"
            :productImage="product.image"
            :totalPrice="product.totalPrice"
            :unitPrice="product.productCost"
            :name="product.title"
            @emitremoveevent="removeItem"
            v-for="product in products"
        />
    </div>
</template>

<script>

    import { mapActions} from 'vuex'
    import AllProducts from '../dashboard/AllProducts'
    import ProductService from '../../services/ProductService'

    export default {
        name: "ProductsContainer",
        data() {
            return {
                products: []
            }
        },
        components: {
            AllProducts
        },
        methods: {
            ...mapActions(['setLoadingPage', 'setRequestFeedBack']),
            async removeItem(event){
                if(event.event === "delete"){
                    this.setLoadingPage(true)
                    try {
                        const response = await ProductService.delete(event.productID)
                        this.products = this.products.filter((product) => {
                            return product._id !== event.productID
                        })
                        this.setLoadingPage(false)
                        this.setRequestFeedBack(response.data.data)
                    } catch (error) {
                        this.setLoadingPage(false)
                        this.setRequestFeedBack(error.response.data.error)
                    }
                }
                if(event === "edit"){
                    console.log('edit')
                }
            }
        },
        async created() {
            try {
                this.setLoadingPage(true)
                const response = await ProductService.getAll()
                this.setLoadingPage(false)
                this.products = response.data.fetcheQuerys
            } catch (error) {
                this.setLoadingPage(false)
                this.setRequestFeedBack('Something went wrong')
            }
        },
    }

</script>

<style scoped>

    @media (max-width: 600px){
        ul {
            display: none;
        }
    }

    .products-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 1em;
    }

    @media (min-width: 600px){
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            width: 100%;
            border-radius: 5px;
            padding: .7em 1em;
            background-color: rgb(250, 250, 250);
            -webkit-box-shadow: 0px 6px 5px -4px rgba(0,0,0,0.22); 
            box-shadow: 0px 6px 5px -4px rgba(0,0,0,0.22);
            place-items: center;
        }

        h1 {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 13px;
            color: #1b1b1b;
        }
    }
</style>