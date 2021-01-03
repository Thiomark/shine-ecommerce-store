<template>
    <ul class="menu">
        <li v-for="(item, index) in items" :key="index"><a href="javascript:void(0)">{{item}}</a></li>
    </ul>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            items: {
                type: Array
            }
        }
    }
</script>

<style  scoped>

    .menu {
        display: grid;
        grid-template-columns: 1fr;
        padding: 1em 2em;
        border-radius: 4px;
        z-index: 12;
        right: .5em;
        margin-top: 1em;
        width: auto;
        position: absolute;
        background-color: rgb(241, 241, 241);
        box-shadow: 0px 0px 3px 0 rgba(172, 172, 172, 0.45);
        -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.45);
        -moz-box-shadow: 0px 0px 3px 1px rgba(141, 141, 141, 0.199);
    }

    li {
        padding: .5em 0;
    }

    a {
        color: rgb(68, 68, 68);
        font-size: .8rem;
    }

</style>