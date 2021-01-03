<template>
    <div class="filter-container">
        <div class="right-section">
            <a href="javascript:void(0)">Category</a>
            <ul>
                <a href="javascript:void(0)">New</a>
                <a href="javascript:void(0)">Trending</a>
                <a href="javascript:void(0)">All</a>
                <a href="javascript:void(0)">T-Shirts</a>
                <a href="javascript:void(0)">Shoes</a>
                <a href="javascript:void(0)">Watch</a>
            </ul>
        </div>
        <div class="left-section">
            <a href="javascript:void(0)">Sort</a>
            <ul>
                <a href="javascript:void(0)">A - Z</a>
                <a href="javascript:void(0)">Z - A</a>
                <a href="javascript:void(0)">Price low to high</a>
                <a href="javascript:void(0)">Price high to low</a>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:  "FilterSection"
    }
</script>

<style scoped>

    .filter-container {
        width: 100%;
        display: flex;
        max-width: 1100px;
        align-items: center;
        justify-content: center;
        padding: 1em 0;
    }

</style>