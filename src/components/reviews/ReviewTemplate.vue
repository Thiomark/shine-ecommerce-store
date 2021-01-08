<template>
    <div class="comment-container">
        <div class="template-wrapper">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" srcset="">
            <div class="right-section">
                <h1>{{name}}</h1>
                <h2>{{date}}</h2>
                <p>{{review}}</p>
            </div>
        </div>
        <div v-if="modifyReview" class="ellipsis-menu">
            <i @click="showOptionMenu" @blur="showOptionMenu" class="fas fa-ellipsis-v"></i>
            <Menu @event="clickDetected" v-if="showOptions" :listItems="['delete']" item="elete" class="popup-menu"/>
        </div>
    </div>
</template>

<script>

    import Menu from '../Menu'
    
    export default {
        name: "ReviewTemplate",
        components: {
            Menu
        },
        props: {
            name: {
                type: String
            },
            date: {
                type: String
            },
            review: {
                type: String
            },
            stars: {
                type: Number
            },
            reviewID: {
                type: String
            },
            modifyReview: {
                type: Boolean
            }
        },
        data() {
            return {
                showOptions: false
            }
        },
        methods: {
            showOptionMenu(){
                this.showOptions = !this.showOptions
            },
            clickDetected(event){
                this.$emit('popupmenuevent', {event, reviewID: this.reviewID})
            }
        },
    }
</script>

<style scoped>

    .ellipsis-menu {
        display: flex;
        position: relative;
    }

    .fa-ellipsis-v {
        align-self: center;
        cursor: pointer;
        color: rgb(36, 36, 36);
    }

    .popup-menu {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
    }

    .comment-container {
        display: grid;
        width: 100%;
        grid-template-columns: auto 20px;
        /* justify-content: space-around;     */
    }

    img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        cursor: pointer;
    }

    .template-wrapper {
        display: flex;
        padding: 1em 0;
    }

    .right-section {
        margin-left: 2em;
    }

    .right-section  h1 {
        font-size: 1rem;
        color: rgb(36, 36, 36);
        text-transform: capitalize;
    }

    .right-section  h2 {
        font-size: .8rem;
        color: rgb(148, 148, 148);
        font-weight: 400;
        margin: .6em 0;
    }

    .right-section  p {
        font-size: .8rem;
        color: rgb(36, 36, 36);
    }

</style>