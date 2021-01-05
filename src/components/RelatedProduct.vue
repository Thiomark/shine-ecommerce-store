<template>
    <div class="related-products-container">
        <h1 >Related Products</h1>
        <div class="related-products">
            <Product 
                :key="firstProducts[0]._id" 
                :title="firstProducts[0].title"
                :price="firstProducts[0].productCost"
                :productID="firstProducts[0]._id"
                :productImage="firstProducts[0].image"
            />
            <Product 
                :key="firstProducts[1]._id" 
                :title="firstProducts[1].title"
                :price="firstProducts[1].productCost"
                :productID="firstProducts[1]._id"
                :productImage="firstProducts[1].image"
            />
            <Product 
                :key="firstProducts[2]._id" 
                :title="firstProducts[2].title"
                :price="firstProducts[2].productCost"
                :productID="firstProducts[2]._id"
                :productImage="firstProducts[2].image"
            />
        </div>
    </div>
</template>

<script>

    import Product from './product/Product'
    
    export default {
        name: "RelatedProduct",
        props: {
            products: {
                type: Object
            }
        },
        data() {
            return {
                firstProducts: [
                    {
                        "categories": [
                            "clothing",
                            "t-shirt"
                        ],
                        "tags": [
                            "summer",
                            "tees"
                        ],
                        "section": "all",
                        "_id": "5feefb01934a9c0017995cef",
                        "title": "Product Default1",
                        "productCost": 2100,
                        "summary": "Quickly impact bleeding-edge bandwidth whereas covalent catalysts for change. Tonal stitching. 98% cotton, 2% elastane. Made in Italy",
                        "averageRating": 7,
                        "description": "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto. adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto. adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto.",
                        "image": "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        "createdAt": "2021-01-01T10:35:45.955Z",
                        "__v": 0
                    },
                    {
                        "categories": [
                            "shoes"
                        ],
                        "tags": [
                            "high",
                            "nike"
                        ],
                        "section": "all",
                        "_id": "5feefb01934a9c0017995cf0",
                        "title": "Product Default2",
                        "productCost": 2150,
                        "summary": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus' Bonorum et Malorum",
                        "averageRating": 8,
                        "description": "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto. adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto. adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto.",
                        "image": "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                        "createdAt": "2021-01-01T10:35:45.959Z",
                        "__v": 0
                    },
                    {
                        "categories": [
                            "men clothing",
                            "clothing"
                        ],
                        "tags": [
                            "summer",
                            "tees"
                        ],
                        "section": "all",
                        "_id": "5feefb01934a9c0017995cf1",
                        "title": "Product Default3",
                        "productCost": 2109.95,
                        "summary": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        "description": "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto. adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto. adipisicing elit. Cum ex, odio molestias facilis aliquid corporis iusto rerum deserunt rem consequatur dolor, debitis facere consectetur earum suscipit in maiores fugiat! Architecto.",
                        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                        "createdAt": "2021-01-01T10:35:45.960Z",
                        "__v": 0
                    }
                ]
            }
        },
        components: {
            Product
        }
    }

</script>

<style scoped>

    @media (max-width: 600px){
        .related-products-container{
            padding: 0 2em;
        }
    }

    .related-products-container h1{
        text-align: center;
        font-size: 1.3rem;
        color: rgb(100, 100, 100);
        padding: 1rem;
    }

    .related-products-container {
        width: 100%;
        max-width: 1100px;
        border-top: 1px solid rgb(221, 221, 221);
        margin: 0 auto; 
        padding-bottom: 2em;
    }

    .related-products {
        display: grid;
        width: 100%;
        gap: 30px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));    
    }

</style>