<template>
    <div class="coupon-code">
        <input type="text" placeholder="Coupon code">
        <input type="button" value="apply coupon">
    </div>
</template>

<script>
    export default {
        name: "CouponCode"
    }
</script>

<style scoped>

    .coupon-code {
        width: 100%;
        max-width: 1100px;
        padding: 2em;
    }
   
    .coupon-code input {
        width: 100%;
        padding: 19px 15px;
        box-shadow: rgba(0, 0, 0, 0.024) 0px 2px 1px 0px inset;
        background-color: #f7f7f7;
        color: #777777;
        border: none;
        font-size: .9em;
        margin: .5em 0;
        border-radius: 5px;
    }

    .coupon-code input[type="button"] {
        background-color: #9c9c9c;
        color: #f3f3f3;
    }

    @media(min-width: 600px){

        .coupon-code {
            display: flex;
            width: 100%;
            max-width: 1100px;
            padding: 2em;
        }
        
        .coupon-code input {
            width: 100%;
            margin: 0 .5em ;
            max-width: 200px;
        }

    }

</style>