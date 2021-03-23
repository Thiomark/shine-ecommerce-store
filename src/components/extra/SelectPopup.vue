<template>
    <div class="overlay">
        <div class="popup" >
            <a class="close" @click="closeThePopUp" href="#">&times;</a>
            <div class="content">
                <p>{{message}}</p>
            </div>
            <div class="buttons-wrapper">
                <div @click="confirmTheEvent" class="button">
                    <a href="#">Yes</a>
                </div>
                <div @click="closeThePopUp" class="button">
                    <a href="#">No</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name: "SelectPopup",
        data() {
            return {
                RequestFeedBack: null,
                hideThepopup: false,
                editSelectedProject: false
            }
        },
        props: {
            message: {
                type: String
            },
            projectInformation: {
                type: Object
            }
        },
        methods: {
            ...mapActions(['addSelectPopupMessage', 'addSelectPopupConfirm']),
            closeThePopUp(){
                this.setSelectPopupMessage = null
            },
            confirmTheEvent(){
                this.addSelectPopupConfirm = true
                this.addSelectPopupMessage = null
            },
        },
    }
</script>

<style scoped>

    @media (min-width: 1201px){
        .overlay {
            z-index: 999;
        }
    }

    .hideThepopup {
        display: none;
    }

    h1 {
        text-align: center;
        font-family: Tahoma, Arial, sans-serif;
        color: #06D85F;
        margin: 80px 0;
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

    .popup {
        /* margin: 70px auto; */
        padding: 30px;
        background: #fff;
        border-radius: 5px;
        width: 30%;
        position: relative;
        /* transition: all 5s ease-in-out; */
    }

    .buttons-wrapper {
        margin-top: 1em;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 4px;

        place-items: ceter;
    }

    .buttons-wrapper a {
        text-decoration: none;
        color: rgb(240, 240, 240);
        font-size: 14px;
    }

    i {
        margin: 0 5px;
    }

    .button {
        flex-grow: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(92, 92, 92);
        padding: .7em;
        border-radius: 3px;
    }

    .content {
        margin-top: 3em;
    }

    .popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 200ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
    }

    .popup .close:hover {
        color: #06D85F;
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