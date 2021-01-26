<template>
  <div id="app">
    <Navbar />
    <div class="site-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      Navbar,
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: rgb(231, 231, 231);
  }

  .site-container {
    margin: 0 auto;
    max-width: 800px;
  }
</style>
