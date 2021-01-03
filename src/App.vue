<template>
  <div id="app">
    <Navbar storeName="leavealot.com" v-if="!getNavBarInfo"/>
    <router-view/>
    <Footer v-if="!getNavBarInfo" class="put-at-the-bottom"/>
  </div>
</template>

<script>

  require('../src/assets/icofont/icofont.css')
  import Footer from './components/Footer'
  import Navbar from './components/landingpage/Navbar'
  import {mapGetters} from 'vuex'

  export default {
      components: {
        Footer,
        Navbar
      },
      data() {
        return {
          currentRoute: null
        }
      },
      computed: mapGetters(['getNavBarInfo']),

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
