<template>
  <div id="app">
    <RequestFeedBack v-if="getRequestFeedBack" :resposeMessage="getRequestFeedBack"/>
    <Loading v-if="getLoadingPage"/>
    <Navbar storeName="leavealot" v-if="!getNavBarInfo"/>
    <router-view/>
    <Footer v-if="!getNavBarInfo" class="put-at-the-bottom"/>
  </div>
</template>

<script>

  require('../src/assets/icofont/icofont.css')
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
        RequestFeedBack
      },
      data() {
        return {
          currentRoute: null
        }
      },
      methods: {
        ...mapActions(['setLoadingPage'])
      },
      // mounted() {
      //   this.setLoadingPage(false)
      // },
      computed: mapGetters(['getNavBarInfo', 'getLoadingPage', 'getRequestFeedBack']),

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
    /* min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden; */

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
