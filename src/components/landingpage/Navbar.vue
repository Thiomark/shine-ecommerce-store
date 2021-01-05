<template>
    <nav id="nav" class="header-container">
        <div class="header-wrapper"> 
            <router-link to="/" class="logo pri-colour" href="javascript:void(0)">{{storeName}}</router-link>
            <ul class="desktop-menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="">About</router-link></li>
                <li><router-link to="">Contact</router-link></li>
                <li v-if="!$store.state.token" class="login special"><router-link to="/login">Login</router-link></li>
                <li v-if="!$store.state.token" class="signup special"><router-link to="/register">Sign Up</router-link></li>
                <li v-if="$store.state.token" @click="logoutTheUser" class="signup special"><a to="javascript:void(0)">Log Out</a></li>
            </ul>
            <ul class="icons">
                <li><i class="fas fa-heart justico pri-colour "></i></li>
                <li><i class="icofont-user-alt-7 pri-colour  justico"></i></li>
                <li class="cart"><i @click="navigate('Cart')" class="icofont-shopping-cart ico pri-colour "></i><h6 class="items-the-cart pri-colour ">{{getShoppingcart}}</h6></li>
                <div class="menu-button">
                    <i v-if="showMenuIcon" @click="toggleMenu" class="fas fa-bars pri-colour mobile"></i>
                    <a v-if="!showMenuIcon" @click="toggleMenu" class="mobile pri-colour close" href="javascript:void(0)">&times;</a>
                    <!-- <ul :class="{'hideTheMenu': showMenuIcon}" class="mobile-menu">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/product">About</router-link></li>
                        <li><router-link to="shipping">Shipping</router-link></li>
                        <li v-if="!$store.state.token" class="login special"><router-link to="/login">Login</router-link></li>
                        <li v-if="!$store.state.token" class="signup special"><router-link to="/register">Sign Up</router-link></li>
                        <li v-if="$store.state.token" @click="logoutTheUser" class="signup special"><a to="javascript:void(0)">Log Out</a></li>
                    </ul> -->
                </div>
            </ul>
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

  

   
    @media (min-width: 900px) {
        .desktop-menu {
            display: flex;
        }
        .mobile {
            display: none;
        }
    }
    @media (max-width: 900px) {
        .desktop-menu {
            display: none;
        }
        
    }

    .pri-colour {
        color: rgb(209, 209, 209);
    }

    .header-container {
        width: 100%;
        padding: 1.3em;
        overflow: hidden;
        background-color: rgb(10, 10, 10);
    }

    .header-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        max-width: 1100px;
        margin: auto;
        align-items: center;
    }

    .mobile-menu {
        position: absolute;
        align-items: center;
        justify-content: center;
        background: gray;
        top: 1em;
        padding: 1em;
        width: 10em;

    }

    .desktop-menu li {
        padding: 0 1.4em;
    }

    .mobile {
        position: absolute;
    }

    .menu-button {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
    }

    .icons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 1.6em;
        place-items: center;
    }

    .close {
        font-size: 2rem;
    }

    .logo {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 1em;
        cursor: pointer;
        font-family: 'Poppins', sans-serif; 
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

    .cart {
        position: relative;
        font-size: 1.2rem;
        
    }

    .icofont-shopping-cart {
    }

    .justico {
        font-size: .9rem;
    }

    .items-the-cart {
        position: absolute;
        top: -7px;
        right: -10px;
        font-size: 14px;
        font-weight: 400;
    }

    .desktop-menu a {
        color: rgb(228, 228, 228);
        font-family: 'Poppins', sans-serif; 
    }
    
    .desktop-menu a:hover {
        color: teal;
    }

    i {
        cursor: pointer;
    }

    i:hover {
        color: teal;
    }

    
</style>