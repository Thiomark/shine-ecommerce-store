<template>
    <header>
        <h1>Free shipping available on all products</h1>
        <div class="container">
            <button class="mobile">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div class="middle">
                <h1><router-link class="store-name" to="/">{{getStoreName}}</router-link></h1>
                <ul class="desktop">
                    <li>Journal</li>
                    <li>About</li>
                </ul>
            </div>
            <div class="right">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                <button class="desktop">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                </button>
                <button @click="navigate('Cart')" class="cart">
                    <svg style="margin-right: .7em" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                      </svg>
                    <span class="items-the-cart">{{getItemsInCart.length}}</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script scoped>

    import { mapGetters } from 'vuex'
    export default {
        name: "NavBar",
        props: {
            storeName: {
                type: String
            }
        },
        data() {
            return {
                showMenuIcon: true
            }
        },
        methods: {
            navigate(page) {
                this.$router.push({
                    name: page
                })
            }
        },
        computed: mapGetters(['getStoreName', 'getItemsInCart']),
        
    }
</script>

<style scoped>

    .cart {
        position: relative;
    }

    .store-name {
        cursor: pointer;
        font-size: 2rem;
        font-weight: bold;
        color: black;
    }

    .desktop {
        display: none;
    }

    header {
        border-bottom: 1px solid rgb(230, 230, 230);
    }

    header > h1 {
        text-align: center;
        border-bottom: 1px solid rgb(202, 202, 202);
        padding: .6em;
        font-size: .8rem;
        font-weight: lighter;
        color: rgb(69, 69, 69);
    }

    header > div {
        display: flex;
        padding: 1em 2em;
        align-items: center;
        justify-content: space-between;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .right {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }

    .items-the-cart {
        font-size: .85rem;
        position: absolute;
        top: 0;
        right: 0;
    } 

    @media (min-width: 900px) {
        .desktop {
            display: block;
        }

        header > h1 {
            font-size: 1rem;
            color: rgb(12, 12, 12);
        }

        .middle {
            display: flex;
            align-items: center;
            gap: 2em;
        }
    
        .middle ul {
            display: flex;
            align-items: center;
            gap: 1em;
            cursor: pointer;
        }
    
        .middle ul li:hover {
            text-decoration: underline;
        }

        .mobile {
            display: none;
        }

        .right {
            gap: 1.5em;
        }
    }
    
</style>