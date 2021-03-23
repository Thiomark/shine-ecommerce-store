<template>
    <div class="product-wrapper">
        <form @submit.prevent="sumbitTheProduct">
            <input v-model="title" type="text" placeholder="Product title">
            <div class="row">
                <input v-model="categories" type="text" placeholder="Categories, separated by a comma">
                <input v-model="tags" type="text" placeholder="Tags, separated by a comma">
                <input v-model="section" type="text" placeholder="Section">
                <input v-model="productCost" type="number" placeholder="Product Price">
            </div>            
            <input v-model="image" type="text" placeholder="Product image url">          
            <textarea v-model="description" name="message" type="text" placeholder="Product description"></textarea>
            <textarea v-model="summary" name="message" type="text" placeholder="Product summary"></textarea>
            <input type="submit" value="Submit" >
        </form>
    </div>
</template>

<script>
    import ProductService from '../../services/ProductService'
    import {mapActions} from 'vuex'
    export default {
        name: "ProductForm",
        data() {
            return {
                title: '',
                categories: '',
                tags: '',
                section: '',
                image: '',
                productCost: '',
                description: '',
                summary: '',
            }
        },
        methods: {
            ...mapActions(['setRequestFeedBack', 'setLoadingPage']),
            async sumbitTheProduct(){
                this.setLoadingPage(true)
                try {
                    const product = await ProductService.post({
                        title: this.title,
                        categories: this.categories,
                        tags: this.tags,
                        section: this.section,
                        image: this.image,
                        productCost: parseInt(this.productCost, 10),
                        description: this.description,
                        summary: this.summary,
                    })
                    this.setRequestFeedBack(product.data.message)
                    this.setLoadingPage(false)
                } catch (error) {
                    this.setLoadingPage(false)
                    this.setRequestFeedBack(error.response.data.error)
                    
                }
            }
        },
        
    }
</script>

<style scoped>

    

    .product-wrapper {
        background: #f1f1f1;
        padding: 1em;
    }

    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 15px;
    }

    h1 {
        text-align: center;
        color: #a8a8a8;
        text-shadow: 1px 1px 0 white;
    }

    form {
        max-width: 600px;
        text-align: center;
        margin: 20px auto;
    }

    form input, form textarea {
        border: 0;
        outline: 0;
        padding: 1em;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 3px;
        display: block;
        width: 100%;
        margin-top: 1em;
        font-family: 'Merriweather', sans-serif;
        -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        resize: none;
    }

    form input:focus, form textarea:focus {
        -moz-box-shadow: 0 0px 2px #e74c3c !important;
        -webkit-box-shadow: 0 0px 2px #e74c3c !important;
        box-shadow: 0 0px 2px #e74c3c !important;
    }

    input[type="submit"] {
        color: white;
        background: #e74c3c;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        -moz-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
        -webkit-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
        box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
    }
    form textarea {
        height: 126px;
    }



</style>