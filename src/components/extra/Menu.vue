<template>
    <div class="Menu-wrapper" :class="{shadow: true}" :style="{background: backgroundColour}">
        <ul>
            <li v-for="(item, index) in listItems" :key="index" @click="emitTheEvent(item)" ><a href="javascript:void(0)">{{item}}</a></li>
        </ul>
    </div>
</template>

<script>
    
    export default {
        name: 'Menu',
        props: {
            listItems: {
                type: Array
            },
            backgroundColour: {
                type: String
            },
            shadow: {
                type: Boolean
            }
        },
        data(){
            return {
                buttonState: "button"
            }
        },
        methods: {
            emitTheEvent(event){
                this.$emit('event', event)
            }
        },
    }
</script>

<style scoped>

    .Menu-wrapper {
        z-index: 3;
        width: auto;
        border-radius: 7px;
        padding: .4em 0;
        white-space: nowrap;
    }

    .shadow {
        -moz-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        -webkit-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
    }

    .Menu-wrapper ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr;
        place-items: ceter;
        width:100%;
        gap: 5px;

    }

    .Menu-wrapper ul a {
        text-decoration: none; 
        color: #3b3b3b;
        font-size: .9rem;  
        font-weight: 500;
        text-transform: capitalize;
    }

    .Menu-wrapper li {
        display: flex;
        justify-content: center; 
        padding: .5em 2em;
        cursor: pointer;
    } 

    .Menu-wrapper li:hover {
        background-color: rgb(209, 209, 209);
    }


</style>
