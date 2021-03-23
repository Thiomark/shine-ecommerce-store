<template>
    <div class="reviews-container">
        <AverageRating :reviewAvarage="reviewAvarage"/>
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
                :reviewModified="review.reviewModified"
                :modifyReview="review.modifyReview"
                @popupmenuevent="reviewSettings"
            />
        </div>
        <div v-if="getIsloggedIn" class="add-review">
            <StarRating @numberofstars="numberofstars"/>
            <form >
                <textarea v-model="review" name="" cols="30" rows="10" placeholder="Write a review"></textarea>
                <input @click="createAReview" type="button" value="submit" >
            </form>
        </div>
    </div>
</template>

<script>

    import StarRating from '../components/reviews/StarRating'
    import ReviewTemplate from './reviews/ReviewTemplate'
    import AverageRating from './reviews/AverageRating'
    import ReviewService from '../services/ReviewService'
    import Buffer from './extra/Buffer'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            ReviewTemplate,
            AverageRating,
            Buffer,
            StarRating
        },
        props: {
            productReviews: {
                type: Array
            }
        },
        data() {
            return{
                productID: this.$route.params.productID,
                review: '',
                reviews: '',
                rating: null,
                buffer: true,
                reviewAvarage: 0
            }
        },
        computed: {
            ...mapGetters(['getIsloggedIn', 'getTheUser', 'isAdmin'])
        },
        async created() {
            try {
                const response = await ReviewService.get(this.productID)
                let reviews = response.data.fetcheQuerys

                if(this.getIsloggedIn){
                    reviews.forEach(review => {
                        if(review.user === this.getTheUser._id || this.getTheUser.role === 'admin'){
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

                this.updateReviews(reviews)
                
                this.buffer = false
                this.reviews = reviews 
            } catch (error) {
                console.log(error.response.data.error)
            } 
        },
        methods: {
            ...mapActions(['setRequestFeedBack', 'setLoadingPage', 'setProductReviews', 'updatedReviewState']),
            navigate(page) {
                this.$router.push({
                    name: page
                })
            },
            updateReviews(reviews){
                let reviewSum = 0
                for(const review of reviews){
                    reviewSum = reviewSum + review.rating
                }
                const checkIfHasDecimal = this.hasDecimal(reviewSum / reviews.length)
                if(!checkIfHasDecimal){
                    this.reviewAvarage = reviewSum / reviews.length
                }else {
                    this.reviewAvarage = parseFloat(reviewSum / reviews.length).toFixed(1)
                }
            },
            numberofstars(numberOfStars){
                this.rating = numberOfStars
            },
            hasDecimal(num) {
                return !!(num % 1);
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
                    review.createdAt = new Date().toString()
                    this.reviews.push(review)
                    this.updateReviews(this.reviews)
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
                        this.updateReviews(this.reviews)
                    } catch (error) {
                        this.setLoadingPage(false)
                        this.setRequestFeedBack(error.response.data.error)
                    }
                }
                if(event.event === "edit"){

                    this.reviews = this.reviews.map((review) => {
                        if(review._id === event.reviewID){
                            review.review = event.updatedReview.review
                            review.rating = event.updatedReview.rating
                            review.reviewModified = true
                        }
                        return review
                    })
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

    /* .hoverable {
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
    } */

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

    .add-review {
        padding-top: 1em;
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