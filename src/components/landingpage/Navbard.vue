<template>
    <header>
        <div class="container">
            <router-link class="logo" to="/">{{storeName}}</router-link>
            <section>
                <ul>
                    <li v-if="!$store.state.token" class="login special"><router-link to="/login">Sign In</router-link></li>
                    <li v-if="$store.state.token" @click="logoutTheUser" class="signup special"><a to="javascript:void(0)">Log Out</a></li>
                    <li @click="navigate('Favourite')"><i class="fas fa-heart justico"></i></li>
                    <li v-if="$store.state.isAdmin" @click="navigate('Dashboard')" ><i class="icofont-dashboard-web pri-colour"></i></li>
                    <li v-if="$store.state.token"><i class="icofont-user-alt-7 justico"></i></li>
                    <li class="cart"><i @click="navigate('Cart')" class="icofont-shopping-cart ico"></i><h1 class="items-the-cart">{{getShoppingcart}}</h1></li>
                </ul>
            </section>
        </div>
    </header>
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

    :root {
        --font-colour: #272727;
    }

    header {
        -moz-box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
        -webkit-box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
        box-shadow: rgba(17, 17, 18, 0.04) 0 2px 4px, rgba(19, 20, 20, 0.06) 0 1px 1px;
        z-index: 10;
        padding: 0 2em;
        height: 4em;
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: #ffffff;
        position: fixed;
    }

    .logo {
        font-family: 'Montserrat Alternates', sans-serif;
        color: var(--font-colour);
        font-size: .9rem;
        text-transform: uppercase;
    }

    a:hover {
        color: #086fcf;
    }

    i {
        color: var(--font-colour);
        font-size: .9rem;
        cursor: pointer;
    }

    i:hover {
        color: #086fcf;
    }

    .icofont-shopping-cart  {
        font-size: 1.2rem;
    }

    section a {
        color: var(--font-colour);
        font-size: .9rem;
    }

    .container {
        display: flex;
        justify-content: space-between;
        max-width: 1100px;
        margin: auto;
        width: 100%;
    }

    ul {
        display: flex;
    }

    li {
        padding: 0 .6em;
    }

    .cart {
        position: relative;
    }

    h1 {
        position: absolute;
        font-size: .8rem;
        top: -10px;
        right: 0;
    }








header nav > ul > li ul li {
  border-bottom: 1px solid #2e2e38;
}





header form button:hover {
  background-position: left bottom;
}

header form.open {
  
}


header #customer_login_link:hover {
  color: #086fcf;
}

header #nav-icon {
  display: none;
}



    
</style>