<template>
    <div>
        <i @mouseover="addTheHoverEffect(1)" @click="selectStars(1)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
        <i @mouseover="addTheHoverEffect(2)" @click="selectStars(2)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
        <i @mouseover="addTheHoverEffect(3)" @click="selectStars(3)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
        <i @mouseover="addTheHoverEffect(4)" @click="selectStars(4)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
        <i @mouseover="addTheHoverEffect(5)" @click="selectStars(5)" @mouseleave="removeTheHoverEffect" class="far hoverstar fa-star"></i>
    </div>
</template>

<script>
    export default {
        name: "StarRating",
        methods: {
    
            addTheHoverEffect(index){
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
                const allStars = document.querySelectorAll('.hoverstar')
                for(let i = 0; i < allStars.length; i++){
                    allStars[i].classList.remove('hoverable')
                }
                for(let i = 1; i <= index; i++){
                    allStars[i - 1].classList.add('selected-stars')
                }
                this.$emit('numberofstars', index)
            },
            removeTheHoverEffect(){
    
                const allStars = document.querySelectorAll('.fa-star')

                for(let i = 0; i < allStars.length; i++){
                    allStars[i].classList.remove('hoverable')
                }
                
            },
        },
    }
</script>

<style scoped>

    .hoverable {
        color: #ffa534;
    }
    .selected-stars {
        color: #ffa534;
    }

    .far {
        font-size: 1.3rem;
        opacity: .6;
    }


</style>