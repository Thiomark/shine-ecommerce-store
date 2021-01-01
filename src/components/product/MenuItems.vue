<template>
    <ul class="menu-container">
        <li><a href="#"></a>Lorem ipsum dolor</li>
        <li><a href="#"></a>Lorem ipsum dolor</li>
        <li><a href="#"></a>Lorem ipsum dolor</li>
        <li><a href="#"></a>Lorem ipsum dolor</li>
    </ul>
</template>

<script>
    export default {
        name: 'MenuItems'
    }
</script>

<style scoped>

    .menu-container {
        width: 400px;
        background-color: rgb(207, 207, 207);
        padding: 1em 2em;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        -webkit-box-shadow: 0px 0px 14px -9px #000000; 
        box-shadow: 0px 0px 14px -9px #000000;
    }

    .menu-container a {
        color: rgb(22, 22, 22);
        font-size: .5rem;
    }

</style>