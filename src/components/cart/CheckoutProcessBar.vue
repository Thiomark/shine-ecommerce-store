<template>
    <div class="stage">
        <div class="progress-bar-wrapper">
            <ul class="progress-bar">
                <li :class="{'confirm-order': confirmOrder}">Confirm Order</li>
                <li :class="{'your-details': yourDetails}">Your Details</li>
                <li :class="{'checkout': checkOut}">Checkout</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CheckoutProcessBar',
        props: {
            confirmOrder: {
                type: Boolean
            },
            yourDetails: {
                type: Boolean
            },
            checkOut: {
                type: Boolean
            }
        }
    }
</script>

<style  scoped>

    .stage {
        padding-bottom: 2em;
    }

    .progress-bar-wrapper {
        width: 100%;
        background: #ffffff;
        margin: auto;
        padding: 20px;
        border-radius: 5px; 
    }

    .progress-bar {
        display: flex;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        list-style-type: none;
        margin: auto;
    }

    .progress-bar li {
        float: left;
        font-size: 11px;
        line-height: 11px;
        width: 25%;
        position: relative;
        z-index: 1;
    }

    .progress-bar li:before {
        content: "I";
        font-family: dreamspace;
        display: block;
        font-size: 10px;
        line-height: 24px;
        color: #d5dbdb;
        background: #ffffff;
        width: 24px;
        border-radius: 50%;
        margin: 0 auto 5px auto;
        border: 2px #d5dbdb solid;
    }

    .progress-bar li:after {
        content: "";
        width: 100%;
        height: 2px;
        background: #d5dbdb;
        position: absolute;
        margin: auto;
        left: 50%;
        top: 13px;
        z-index: -1;
    }

    .progress-bar li:last-child:after {
        display: none;
    }

    /* SIGNUP PAGE 1 */

    .confirm-order:first-child:before {
        color: #4dc5b1;
        border-color: #4dc5b1;
    }

    /* SIGNUP PAGE 2 */

    .confirm-order:first-child:after {
        background: #4dc5b1;
    }

    .your-details:nth-child(2):before {
        color: #4dc5b1;
        border-color: #4dc5b1;
    }

    /* SIGNUP PAGE 3 */

    .your-details:nth-child(2):after {
        background: #4dc5b1;
    }

    .checkout:nth-child(3):before {
        color: #4dc5b1;
        border-color: #4dc5b1;
    }

    



</style>