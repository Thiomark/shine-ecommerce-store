<template>
    <nav>
        <ul class="menu">
            <li class="logo"><router-link to="/" href="#">{{storeName}}</router-link></li>
            <li class="item"><router-link to="/">Home</router-link></li>
            <li class="item"><router-link to="/product">About</router-link></li>
            <li class="item"><router-link to="shipping">Shipping</router-link></li>
            <!-- <li><i class="icofont-search ico"></i></li> -->
            <li class="item button"><router-link to="/login" >Log In</router-link></li>
            <li class="item button secondary"><router-link to="/register" >Sign Up</router-link></li>
            <li @click="navigate('Cart')" class="item button"><i class="icofont-shopping-cart ico "></i><h6 class="items-the-cart">{{itemsInShoppingCart}}</h6></li>
            
            <li class="toggle"><span class="bars"></span></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            storeName: {
                type: String
            }
        },
        data() {
            return {
                itemsInShoppingCart: null
            }
        },
        methods: {
            navigate(page) {
                this.$router.push({
                    name: page
                })
            }
        },
        mounted() {
            this.itemsInShoppingCart = this.$store.getters.getShoppingcart
        }
    }
</script>

<style scoped>

    .icofont-shopping-cart {
        position: relative;
    }

    .items-the-cart {
        position: absolute;
        top: 13px;
        padding-left: 1.2em;
        /* top: 50;
        right: 0; */
    }

    .items-the-cart{
        color: #ebebeb;
        font-size: .7em;
    }


    i {
        cursor: pointer;
    }

    i:hover {
        color: #005959;
    }

    .ico {
        color: white;
    }
    nav {
        background: #222;
        padding: 5px 20px;
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 10;
    }

    ul {
        max-width: 1100px;
        margin: auto;
    }

    a {
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }

    .logo a:hover {
        text-decoration: none;
    }
    .menu li {
        font-size: 16px;
        padding: 15px 5px;
        white-space: nowrap;
    }
    .logo a,
    .toggle a {
        font-size: 20px;
    }
    .button.secondary {
        border-bottom: 1px #444 solid;
    }

    /* Mobile menu */
    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .toggle {
        order: 1;
    }
    .item.button {
        order: 2;
    }
    .item {
        width: 100%;
        text-align: center;
        order: 3;
        display: none;
    }
    .item.active {
        display: block;
    }

    .toggle {
        cursor:pointer;
    }


    /* Tablet menu */
    @media all and (min-width: 468px) {
        .menu {
            justify-content: center;
        }

        .logo {
            flex: 1;
        }

        .item.button {
            width: auto;
            order: 1;
            display: block;
        }
        .toggle {
            order: 2;
        }
        .button.secondary {
            border: 0;
        }
        .button a {
            padding: 7.5px 15px;
            background: teal;
            border: 1px #006d6d solid;
            border-radius:50em;
        }
        .button.secondary a {
            background: transparent;    
        }
        .button a:hover {
            text-decoration: none;
            transition:all .25s;
        }
        .button:not(.secondary) a:hover {
            background: #006d6d;
            border-color: #005959;
        }
        .button.secondary a:hover {
            color: #ddd;
        } 
    }

    @media all and (min-width: 768px) {

        .item {
            display: block;
            width: auto;
        }

        .toggle {
            display: none;
        }

        .logo {
            order: 0;
        }

        .item {
            order: 1;
        }

        .button {
            order: 2;
        }

        .icofont-shopping-cart {
            order: 3;
        }

        .menu li {
            padding: 15px 10px;
        }
        
        .menu li.button {
            padding-right: 0;
        }
    }
</style>