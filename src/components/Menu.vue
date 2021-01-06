<template>
    <div class="Menu-wrapper">
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
        background: #e2e2e2;
        width: auto;
        border-radius: 7px;
        padding: .4em 0;
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
