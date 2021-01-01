<template>
  <div id="app">
    <Navbar storeName="Leavealot.com"/>
    <router-view/>
    <Footer class="put-at-the-bottom"/>
  </div>
</template>

<script>

  require('../src/assets/icofont/icofont.css')
  import Footer from './components/Footer'
  import Navbar from './components/landingpage/Navbar'

  export default {
      components: {
        Footer,
        Navbar
      }

  }

</script>

<style>
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
