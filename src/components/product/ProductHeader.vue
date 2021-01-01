<template>
    <div class="product-header-container">
        <div class="left-section">
            <ul>
                <li><a href="#">Show All</a></li>
                <li><a href="#">new</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Essentials</a></li>
            </ul>
        </div>
        <div class="right-section">
            <ul>
                <li class="menu-links">
                    <!-- <MenuItems class="menu-items"/> -->
                    <a href="#">Sort by</a></li>
                <li><a href="#">Options</a></li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    //import MenuItems from './MenuItems'
    export default {
        name: 'ProdctHeader',
        components: {
            //MenuItems
        }
    }
</script>

<style scoped>

    .menu-links {
        position: relative;
    }

    .menu-items {
        top: 30px;
        z-index: 13;
        position: absolute;
    }

    .product-header-container {
        width: 100%;
        max-width: 1100px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em 0;
    }

    ul {
        display: flex;
    }

    a {
        color: rgb(26, 26, 26);
        font-size: .9rem;
        margin: 0 1em;
        text-transform: capitalize;
    }

</style>