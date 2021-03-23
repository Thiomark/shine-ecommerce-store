<template>
    <div >
        <!-- <SelectPopup v-if="getSelectPopupMessage" :message="getSelectPopupMessage"/> -->
        <RequestFeedBack v-if="getRequestFeedBack" :resposeMessage="getRequestFeedBack"/>
        <Loading v-if="getLoadingPage"/>
        <Navbar storeName="leavealot" v-if="$route.path !== '/dashboard'" />
        <router-view/>
        <Footer v-if="$route.path !== '/dashboard'"  class="put-at-the-bottom"/>
    </div>
</template>

<script>

    require('../src/assets/icofont/icofont.css')
    //import SelectPopup from './components/extra/SelectPopup'
    import Footer from './components/Footer'
    import Navbar from './components/landingpage/Navbard'
    import Loading from './components/Loading'
    import RequestFeedBack from './components/RequestFeedBack'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        components: {
            Footer,
            Navbar,
            Loading,
            RequestFeedBack,
            // SelectPopup
        },
        data() {
            return {
                currentRoute: null
            }
        },
        methods: {
            ...mapActions(['setLoadingPage']),
        },
        computed: mapGetters(['getLoadingPage', 'getRequestFeedBack', 'getSelectPopupMessage']),

    }

</script>

<style >
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #fdfdfd;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }

    input[type="button"] {
        cursor: pointer;
    }
  
</style>
