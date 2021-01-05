<template>
    <nav id="nav" class="header-container">
        <div class="header-wrapper">
            <i v-if="showMenuIcon" @click="toggleMenu" class="fas fa-bars mobile"></i>
            <a v-if="!showMenuIcon" @click="toggleMenu" class="mobile close" href="javascript:void(0)">&times;</a>
            <h1 @click="navigate('Home')" class="logo" href="javascript:void(0)">{{storeName}}</h1>
            <ul class="desktop-menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/product">About</router-link></li>
                <li><router-link to="shipping">Shipping</router-link></li>
                <li v-if="!$store.state.user" class="login special"><router-link to="/login">Login</router-link></li>
                <li v-if="!$store.state.user" class="signup special"><router-link to="/register">Sign Up</router-link></li>
                <li v-if="$store.state.user" @click="logoutTheUser" class="signup special"><a to="javascript:void(0)">Log Out</a></li>
            </ul>
            <ul :class="{'hideTheMenu': showMenuIcon}" class="mobile-menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/product">About</router-link></li>
                <li><router-link to="shipping">Shipping</router-link></li>
                <li v-if="!$store.state.user" class="login special"><router-link to="/login">Login</router-link></li>
                <li v-if="!$store.state.user" class="signup special"><router-link to="/register">Sign Up</router-link></li>
                <li v-if="$store.state.user" @click="logoutTheUser" class="signup special"><a to="javascript:void(0)">Log Out</a></li>
            </ul>
             <li class="cart"><i @click="navigate('Cart')" class="icofont-shopping-cart ico "></i><h6 class="items-the-cart">{{getShoppingcart}}</h6></li>
        </div>
    </nav>
</template>

<script>

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
            toggleMenu(){
                this.showMenuIcon = !this.showMenuIcon
            },
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
            logoutTheUser(){
                this.$store.dispatch('setToken', null)
                this.$store.dispatch('setUser', null)
            },
        },
        computed: mapGetters(['getShoppingcart', 'getTheUser']),
        
    }
</script>

<style scoped>

    .hideTheMenu {
        display: none;
    }

    .header-container {
        z-index: 13;
        width: 100%;
        display: flex;
        background: rgb(20, 20, 20);
        padding: 10px 2em;
        box-sizing: border-box;
        position: fixed;
        top: 0;
    }

    .header-wrapper {
        max-width: 1100px;
        margin: auto;
        position: relative;
        align-items: center;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    ul {
        display: flex;
        align-items: center;
    }

    .header-wrapper ul a {
        color: aliceblue;
        font-size: 1rem;
        padding: 0 1em;
    }

    .icofont-shopping-cart {
        color: aliceblue;
        font-size: 20px;
    }

    .logo {
        color: aliceblue;
        font-size: 1.3em;
        font-weight: 400;
    }

    .cart {
        position: relative;
        position: absolute;
        right: 2em;
    }

    .items-the-cart {
        position: absolute;
        top: -7px;
        right: -10px;
        font-size: 14px;
        color: aliceblue;
        font-weight: 400;
    }

    @media(min-width: 741px){

        ul {
            padding-right: 3.4em;
        }

        .mobile-menu {
            display: none;
        }

        .login {
            padding: 10px .6em;
            border-radius: 70px;
            background-color: teal;
            margin-right: 10px;
        }

        .signup {
            padding: 8px .2em;
            border-radius: 70px;
            border: 2px solid teal;
            margin-right: 10px;
        }

        .mobile {
            display: none;
        }
    }

    

    @media (max-width: 740px){

        .header-container {
            padding-top: 1em;
            padding-bottom: 1em;
        }

        .desktop-menu {
            display: none;    
        }

        ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            background-color: #222;
            top: 46px;
            left: -25px;
            border-radius: 7px;
            padding: 1em;
            width: 200px;
        }

        .mobile {
            position: absolute;
        }

        .logo {
            padding-left: 1.5em;
        }

        .mobile {
            color: aliceblue;
        }

        .fa-bars {
            font-size: 20px;
        }

        .close {
            font-size: 40px;
            top: -12px;
            left: -2px;
        }

        ul li {
            padding: .5em;
        }

    }

    
</style>