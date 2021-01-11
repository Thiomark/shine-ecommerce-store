<template>
    <div class="comment-container">
        <section>
            <div class="header">
                <h1>{{name}} <span v-if="reviewModified">(edited)</span></h1>
                <div v-if="skeletonEffect" class="skeleton-stars">
                    <Skeleton height="1.3em" class="" />
                </div>
                <StarRating @numberofstars="numberofstars" class="add-padding-left" v-if="editReview"/>
                <div v-if="!skeletonEffect && !editReview" class="reviews">
                    <i v-for="index in 5" :key="index" class="far fa-star" :class="[showStarRating(stars, index) ? 'selectedStars' : 'not-selected-stars']"></i>
                </div>
            </div>
            <h2>{{whenWasPosted(date)}}</h2>
            <Skeleton v-if="skeletonEffect" height="8em" />
            <textarea v-if="editReview && !skeletonEffect" name="edit review" v-model="theReview" cols="30" rows="10" placeholder="Edit your review"></textarea>
            <div v-if="editReview" class="buttons">
                <input @click="editTheReview('save')" type="button" value="Save">
                <input @click="editTheReview('cancel')" type="button" value="Cancel">
            </div>
            <p v-if="!editReview && !skeletonEffect">{{review}}</p>
        </section>
        <div v-if="modifyReview" class="ellipsis-menu">
            <i v-if="!skeletonEffect" @click="showOptionMenu" @blur="showOptionMenu" v-click-outside="closeThePopUp" class="fas fa-ellipsis-v"></i>
            <Menu @event="clickDetected" v-if="showOptions"  :listItems="['delete', 'edit']"  class="popup-menu"/>
        </div>
    </div>
</template>

<script>

    import Menu from '../Menu'
    import Skeleton from '../extra/Skeleton'
    import ReviewService from '../../services/ReviewService'
    import StarRating from '../reviews/StarRating'
    
    export default {
        name: "ReviewTemplate",
        components: {
            Menu,
            Skeleton,
            StarRating
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
            },
            reviewModified: {
                type: Boolean
            }
        },
        data() {
            return {
                showOptions: false,
                editReview: false,
                skeletonEffect: false,
                theReview: this.review,
                numberOfStars: this.stars
            }
        },
        methods: {
            numberofstars(stars) {
                this.numberOfStars = stars
            },
            showOptionMenu(){
                this.showOptions = !this.showOptions
            },
            closeThePopUp(){
                this.showOptions = false
            },
            clickDetected(event){
                if(event === 'edit'){
                    this.editReview = true 
                }else{
                    this.$emit('popupmenuevent', {event, reviewID: this.reviewID})
                }
            },
            async editTheReview(event){
                if(event === 'cancel'){
                    this.editReview = false
                }else{
                    if(this.review !== ''){
                        try {
                            this.skeletonEffect = true
                            this.editReview = false
                            const response = await ReviewService.update(this.reviewID, {
                                review: this.theReview,
                                rating: this.numberOfStars
                            })
                            let updatedReview = response.data.newUpdatedReview
                            updatedReview.review = this.theReview
                            updatedReview.rating = this.numberOfStars
                            this.skeletonEffect = false
                            this.$emit('popupmenuevent', {event: 'edit', updatedReview, reviewID: this.reviewID})
                           
                        } catch (error) {
                            console.log(error)
                            this.skeletonEffect = false
                        }                        
                    }else{
                        this.editReview = false
                    }
                }
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

    h1 span {
        font-size: .7rem;
        color: rgb(148, 148, 148);
        padding-left: .7em;
        align-self: center;
    }

    .add-padding-left {
        padding-left: 1em;
    }

    .skeleton-stars {
        height: .9em;
        width: 10em;
        margin-left: 2em;
    }

    input[type="button"] {
        padding: 1.5em;
        color: rgb(224, 224, 224);
        border: none;
        background-color: rgb(36, 36, 36);
        max-width: 300px;
        font-size: .7rem;
        text-transform: uppercase;
        width: 100px;
        margin-top: 1em;
        margin-right: 1em;
        border-radius: 4px;
    }

    textarea {
        border-radius: 4px;
        padding: 1.5em;
        color: rgb(39, 39, 39);
        border: 1px solid rgb(228, 228, 228);
        width: 95%;
        resize: none;
        font-size: 1rem;
        font-family: 'Merriweather', sans-serif;
    }

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
        padding: .4em;
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
        display: flex;
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
        font-size: 1rem;
        color: rgb(36, 36, 36);
        padding-top: .2em;
    }

</style>


