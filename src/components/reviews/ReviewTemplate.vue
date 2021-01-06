<template>
    <div class="comment-container">
        <div class="template-wrapper">
            <img src="https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large" alt="" srcset="">
            <div class="right-section">
                <h1>{{name}}</h1>
                <h2>{{date}}</h2>
                <p>{{review}}</p>
            </div>
        </div>
        <div class="ellipsis-menu">
            <i @click="showOptionMenu" @blur="showOptionMenu" class="fas fa-ellipsis-v"></i>
            <Menu @event="clickDetected" v-if="showOptions" :listItems="['delete', 'edit']" item="elete" class="popup-menu"/>
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
                this.$emit('popupmenuevent', event)
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