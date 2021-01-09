<template>
    <div class="comment-container">
        <div class="template-wrapper">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" srcset="">
            <div class="right-section">
                <h1>{{name}}</h1>
                <h2>{{whenWasPosted(date)}}</h2>
                <div class="reviews">
                    <i v-for="index in 5" :key="index" class="far fa-star" :class="[showStarRating(stars, index) ? 'selectedStars' : 'not-selected-stars']"></i>
                </div>
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
            },
            showStarRating(numberOfStars, starPostion){
                if(numberOfStars >= starPostion){
                    return true
                }
                return false
            },
            whenWasPosted(date){
                const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                return `${new Date(date).getDate()} ${months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`
                //const diffrenceBetweenDates = new Date().getTime() - new Date(date).getTime();
                // if(diffrenceBetweenDates < 86400000){
                //     return 'Today'
                // }
                // else if(diffrenceBetweenDates >= 86400000 && diffrenceBetweenDates < (86400000 * 2)){
                //     return '1 Day ago'
                // }
                // else if(diffrenceBetweenDates >= (86400000 * 2) && diffrenceBetweenDates < (86400000 * 3)){
                //     return '2 Day ago'
                // }
                // else if(diffrenceBetweenDates >= (86400000 * 3) && diffrenceBetweenDates < (86400000 * 4)){
                //     return '3 Day ago'
                // }
                // else if(diffrenceBetweenDates >= (86400000 * 4) && diffrenceBetweenDates < (86400000 * 5)){
                //     return '4 Day ago'
                // }
                // else if(diffrenceBetweenDates >= (86400000 * 5) && diffrenceBetweenDates < (86400000 * 6)){
                //     return '5 Day ago'
                // }
                // else{
                //     return date
                // }
            }
        },
    }
</script>

<style scoped>

    .selectedStars {
        color: #ffa534;
    }

    .not-selected-stars {
        color: rgb(182, 182, 182);
    }

    .ellipsis-menu {
        display: flex;
        position: relative;
    }

    .fa-ellipsis-v {
        align-self: center;
        cursor: pointer;
        color: rgb(36, 36, 36);
    }

    .reviews {
        padding: .2em 0;
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
        padding-top: .2em;
    }

</style>