<template>
    <div class="Prodct-header-container">
        <div class="right-section">
            <a @click="showCategory" class="main-button" href="javascript:void(0)">Category<i class="fas fa-chevron-down"></i></a>
            <ul class="category" v-if="category">
                <a href="javascript:void(0)">New</a>
                <a href="javascript:void(0)">Trending</a>
                <a href="javascript:void(0)">All</a>
                <a href="javascript:void(0)">T-Shirts</a>
                <a href="javascript:void(0)">Shoes</a>
                <a href="javascript:void(0)">Watch</a>
            </ul>
        </div>
        <div class="left-section">
            <a @click="showSort"  class="main-button" href="javascript:void(0)">Sort<i class="fas fa-chevron-down"></i></a>
            <MenuItems items="items"/>
            <ul class="sort" v-if="sort" >
                <a href="javascript:void(0)">A - Z</a>
                <a href="javascript:void(0)">Z - A</a>
                <a href="javascript:void(0)">Price low to high</a>
                <a href="javascript:void(0)">Price high to low</a>
            </ul>
        </div>
    </div>
</template>

<script>

    import MenuItems from '../extra/Menu'

    export default {
        name: 'ProdctHeader',
        data() {
            return {
                sort: false,
                category: false,
                items: ["A - Z", "Z - A", "Price low to high", "Price high to low"]
            }
        },
        methods: {
            showCategory(){
                this.category = !this.category
            },
            showSort(){
                this.sort = !this.sort
            }
        },
        components: {
            MenuItems
            //Menu
        }
    }
</script>

<style scoped>



    .Prodct-header-container {
        width: 100%;
        display: flex;
        max-width: 1100px;
        justify-content: space-between;
        padding: 1em 0;
    }

    .fas {
        padding-left: 10px;

    }

    .Prodct-header-container a{
        color: rgb(68, 68, 68);
        font-size: .8rem;
    }

    .sort {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }


    ul {
        display: flex;
        flex-direction: column;
        padding-top: 1em;
    }

    ul a {
        padding: .6em 0;
    }


</style>