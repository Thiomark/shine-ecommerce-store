<template>
    <div class="dashboard-container">
        <nav class="menu" tabindex="0">
            <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
            <h2>John D</h2>
        </header>
        <ul>
            <li @click="navigate('Home') " tabindex="0"><i class="fas fa-home"></i><span>Home</span></li>
            <li tabindex="0"><i class="fas fa-shopping-cart"></i><span>Products</span></li>
            <li tabindex="0"><i class="fas fa-plus"></i><span>Add Product</span></li>
            <li tabindex="0"><i class="fas fa-comments"></i><span>Reviews</span></li>
            <li tabindex="0"><i class="fas fa-shipping-fast"></i><span>Orders</span></li>
            <li tabindex="0"><i class="fas fa-users"></i><span>Customers</span></li>
            <li tabindex="0"><i class="fas fa-cogs"></i><span>Settings</span></li>
        </ul>
        </nav>
        <main>
            <!-- <ProductForm /> -->
            <AllProducts />
        </main>
    </div>
</template>

<script>

    import {mapActions} from 'vuex'
    //import ProductForm from '../components/dashboard/ProductForm'
    import AllProducts from '../components/dashboard/AllProducts'

    export default {
        data() {
            return {
                somethi: ''
            }
        },
        components: {
            //ProductForm,
            AllProducts

        },
        methods: {
            ...mapActions(['setNavbarAndFooter']),
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
        },
        created() {
            this.setNavbarAndFooter(true)
        },
    }

</script>

<style scoped>

.dashboard-container {
    background: #f0f0f0;
    margin: 0;
    font-family: "Open Sans", Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #fff;
    padding-left: 240px;
}
main {
    position: relative;
    height: 100vh;
}

i {
    padding-right: 1em;
}

.menu {
    background: #6b6b6b;
    height: 100vh;
    width: 240px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    outline: none;
}

.menu .avatar {
    background: rgba(0, 0, 0, 0.1);
    padding: 2em 0.5em;
    text-align: center;
}

.menu .avatar img {
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #ffea92;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
}

.menu .avatar h2 {
    font-weight: normal;
    margin-bottom: 0;
}

.menu ul {
    list-style: none;
    padding: 0.5em 0;
    margin: 0;
}

.menu ul li {
    padding: 0.5em 1em 0.5em 2em;
    font-size: 0.95em;
    font-weight: regular;
    background-size: auto 20px;
    transition: all 0.15s linear;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.menu ul li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.menu ul li:focus {
    outline: none;
}

@media screen and (max-width: 900px) and (min-width: 400px) {
    body {
        padding-left: 90px;
    }

    .menu {
        width: 90px;
    }

    .menu .avatar {
        padding: 0.5em;
        position: relative;
    }

    .menu .avatar img {
        width: 60px;
    }

    .menu .avatar h2 {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 100px;
        margin: 0;
        min-width: 200px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.4);
        transform: translate3d(-20px, -50%, 0);
        transition: all 0.15s ease-in-out;
    }

    .menu .avatar:hover h2 {
        opacity: 1;
        transform: translate3d(0px, -50%, 0);
    }

    .menu ul li {
        height: 60px;
        background-position: center center;
        background-size: 30px auto;
        position: relative;
    }

    .menu ul li span {
        opacity: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        padding: 0.2em 0.5em;
        border-radius: 4px;
        top: 50%;
        left: 80px;
        transform: translate3d(-15px, -50%, 0);
        transition: all 0.15s ease-in-out;
    }

    .menu ul li span:before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 50%;
        left: -5px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid rgba(0, 0, 0, 0.5);
        transform: translateY(-50%);
    }

    .menu ul li:hover span {
        opacity: 1;
        transform: translate3d(0px, -50%, 0);
    }
}
@media screen and (max-width: 400px) {

    body {
        padding-left: 0;
    }

    .menu {
        width: 230px;
        box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);
        transform: translate3d(-230px, 0, 0);
        transition: all 0.3s ease-in-out;
    }

    .menu .smartphone-menu-trigger {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 100%;
        background: #5bc995;
    }

    .menu .smartphone-menu-trigger:before,
    .menu .smartphone-menu-trigger:after {
        content: '';
        width: 50%;
        height: 2px;
        background: #fff;
        border-radius: 10px;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }

    .menu .smartphone-menu-trigger:after {
        top: 55%;
        transform: translate3d(-50%, -50%, 0);
    }

    .menu ul li {
        padding: 1em;
        font-size: 1.2em;
    }

    .menu:focus {
        transform: translate3d(0, 0, 0);
        box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);
    }
    
    .menu:focus .smartphone-menu-trigger {
        pointer-events: none;
    }
}

</style>