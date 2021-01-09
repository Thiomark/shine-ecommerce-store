<template>
    <div class="reviews-container">
        <AverageRating 
            :sumOfReviews="sumOfReviews" 
            :numberOfReviews="reviews.length" 
        />
        <div class="buffer" v-if="buffer">
            <Buffer />
        </div>
        <div class="reviews" v-if="reviews">
            <ReviewTemplate 
                v-for="review in reviews" 
                :key="review._id" 
                :name="review.name" 
                :date="review.createdAt"
                :review="review.review" 
                :stars="review.rating" 
                :reviewID="review._id"
                :modifyReview="review.modifyReview"
                @popupmenuevent="reviewSettings"
            />
        </div>
        <div v-if="$store.state.user" class="add-review">
            <i @mouseover="addTheHoverEffect(1)" @click="selectStars(1)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
            <i @mouseover="addTheHoverEffect(2)" @click="selectStars(2)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
            <i @mouseover="addTheHoverEffect(3)" @click="selectStars(3)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
            <i @mouseover="addTheHoverEffect(4)" @click="selectStars(4)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
            <i @mouseover="addTheHoverEffect(5)" @click="selectStars(5)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
            <form >
                <textarea v-model="review" name="" cols="30" rows="10" placeholder="Write a review"></textarea>
                <input @click="createAReview" type="button" value="submit" >
            </form>
        </div>
    </div>
</template>

<script>

    import ReviewTemplate from './reviews/ReviewTemplate'
    import AverageRating from './reviews/AverageRating'
    import ReviewService from '../services/ReviewService'
    import Buffer from './extra/Buffer'
    import {mapActions} from 'vuex'


    export default {
        components: {
            ReviewTemplate,
            AverageRating,
            Buffer
     
        },
        props: {
            productReviews: {
                type: Array
            }
        },
        data() {
            return {
                numberOfSelectedStars: 0,
                makeit: true,
                productID: this.$route.params.productID,
                review: '',
                reviews: '',
                rating: null,
                starHover: false,
                buffer: true,
                sumOfReviews: 0,
                numberOfReviews: 0
            }
        },
        async created() {
            try {
                const response = await ReviewService.get(this.productID)
                let reviews = response.data.fetcheQuerys
                let sumOfReviews = 0

                if(this.$store.state.user){
                    reviews.forEach(review => {
                        sumOfReviews = sumOfReviews + review.rating
                        if(review.user === this.$store.state.user._id || this.$store.state.user.role === 'admin'){
                            review.modifyReview = true
                        }else {
                            review.modifyReview = false
                        }
                    });
                }else {
                    reviews.forEach(review => {
                        review.modifyReview = false
                    });
                }  
                this.numberOfReviews = reviews.length
                this.sumOfReviews = sumOfReviews
                this.buffer = false
                this.reviews = reviews 
            } catch (error) {
                console.log(error.response.data.error)
            } 
        },
        methods: {
            ...mapActions(['setRequestFeedBack', 'setLoadingPage', 'setProductReviews', 'updatedReviewState']),
            addTheHoverEffect(index){
                //this.starHover = true

                const allStars = document.querySelectorAll('.hoverstar')

                for(let i = 0; i < allStars.length; i++){
                    allStars[i].classList.remove('hoverable')
                    allStars[i].classList.remove('selected-stars')
                    //allStars[i].classList.remove('not-selected-stars')
                }

                for(let i = 1; i <= index; i++){
                    allStars[i - 1].classList.add('hoverable')
                }
            },
            selectStars(index){

                this.rating = index
                const allStars = document.querySelectorAll('.hoverstar')
                for(let i = 0; i < allStars.length; i++){
                    allStars[i].classList.remove('hoverable')
                }
                for(let i = 1; i <= index; i++){
                    allStars[i - 1].classList.add('selected-stars')
                }
            },
            removeTheHoverEffect(){
                // this.starHover = false
                const allStars = document.querySelectorAll('.fa-star')

                for(let i = 0; i < allStars.length; i++){
                    allStars[i].classList.remove('hoverable')
                }
                
            },
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
            async createAReview(){
                try {
                    const newReview = await ReviewService.post({
                        "product": this.productID,
                        "review": this.review,
                        "rating": this.rating
                    })

                    this.title = ''
                    this.review = ''
                    this.rating = null
                    
                    let review = newReview.data.data
                    review.modifyReview = true
                    this.reviews.push(review)
                } catch (error) {
                    this.setRequestFeedBack(error.response.data.error)
                }
            },
            async reviewSettings(event){
                if(event.event === "delete"){
                    try {
                        await ReviewService.delete(event.reviewID)
                        this.reviews = this.reviews.filter((review) => {
                            return review._id !== event.reviewID
                        })
                        

                    } catch (error) {
                        this.setLoadingPage(false)
                        this.setRequestFeedBack(error.response.data.error)
                    }
                }
                if(event === "edit"){
                    console.log('edit')

                }
            },  
        },
    }
</script>

<style  scoped>

    .buffer {
        display: flex;
        justify-content: center;
    }

    .hoverable {
        color: #ffa534;
    }
    .selected-stars {
        color: #ffa534;
    }

    .not-selected-stars {
        color: rgb(182, 182, 182);
    }

    .far {
        font-size: 1.3rem;
        opacity: .6;
    }

    .reviews-container {
        max-width: 1100px;
        width: 100%;
        padding: 2em;
    }

    form {
        padding-top: 2em;
        display: flex;
        flex-direction: column;
    }

    .add-review input[type="text"], input[type="email"] {
        padding: .6em;
        color: rgb(39, 39, 39);
        border: 1px solid rgb(228, 228, 228);
        max-width: 300px;
    }

    .add-review input[type="button"] {
        padding: 1.5em;
        color: rgb(224, 224, 224);
        border: none;
        background-color: rgb(36, 36, 36);
        max-width: 300px;
        font-size: .7rem;
        text-transform: uppercase;
        width: 100px;
        margin-top: 2em;
        border-radius: 4px;
    }

    textarea {
        padding: 1.5em;
        color: rgb(39, 39, 39);
        border: 1px solid rgb(228, 228, 228);
        width: 100%;
        resize: none;
        font-size: 1rem;
        font-family: 'Merriweather', sans-serif;
    }

    label {
        font-size: .9rem;
        padding: 1em 0;
        text-transform: uppercase;
    }

</style>