<template>
    <div class="comment-container">
        <section>
            <div class="header">
                <h1>{{name}}</h1>
                <div class="reviews">
                    <i v-for="index in 5" :key="index" class="far fa-star" :class="[showStarRating(stars, index) ? 'selectedStars' : 'not-selected-stars']"></i>
                </div>
            </div>
            <h2>{{whenWasPosted(date)}}</h2>
            <p>{{review}}</p>
        </section>
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
            }
        },
    }
</script>

<style scoped>

    .comment-container {
        border-radius: .5em;
        margin: 1em 0;
        background-color: rgb(248, 248, 248);
        padding: 1em 2em;
        display: grid;
        width: 100%;
        grid-template-columns: auto 20px;
    }

    .selectedStars {
        color: #ffa534;
    }

    .fa-star {
        font-size: .8rem;
    }

    .not-selected-stars {
        color: rgb(182, 182, 182);
    }

    .header {
        display: flex;
        align-items: center;
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
        padding-left: 1em;
    }

    .popup-menu {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
    }

    section  h1 {
        font-size: 1.1rem;
        font-weight: 500;
        color: rgb(36, 36, 36);
        text-transform: capitalize;
    }

    section  h2 {
        font-size: .9rem;
        color: rgb(148, 148, 148);
        font-weight: 400;
        margin: .6em 0;
    }

    section  p {
        font-size: .8rem;
        color: rgb(36, 36, 36);
        padding-top: .2em;
    }

</style>