<template>
    <div class="overlay">
        <div class="popup">
            <div class="header">
                <h1 v-if="resposeType">{{resposeType}}</h1>
                <a class="close" @click="closeThePopUp" href="#">&times;</a>
            </div>
            <div class="content">
                <p>{{resposeMessage}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "RequestFeedBack",
        props: {
            resposeMessage: {
                type: String
            },
            resposeType: {
                type: String
            },
            success: {
                type: Boolean
            }
        },
        methods: {
            ...mapActions(['setRequestFeedBack']),
            closeThePopUp(){
                this.setRequestFeedBack(null)
            },
        }
    }
</script>

<style scoped>

    @media (min-width: 1201px){
        .overlay {
            z-index: 999;
        }
    }

    .overlay {
        z-index: 50;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 21px;
        font-weight: bold;
        color: #333;
    }

    .popup {
        padding: 30px;
        background: #fff;
        border-radius: 5px;
        width: 30%;
        position: relative;
    }

    .popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
    }

    .content {
        margin-top: 1em;
    }


    .popup .content {
        max-height: 30%;
        overflow: auto;
    }

    @media screen and (max-width: 700px){
        .popup{
            width: 70%;
        }
    }
</style>