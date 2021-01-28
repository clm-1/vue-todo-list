<template>
  <div id="app">

    <div class="site-container">
      <h1>- MY TODO LIST -</h1>
      <Navbar />
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      Navbar,
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      }
    },
    mounted() {
      if (localStorage.getItem('todos') === null) {
        this.$store.commit('setStorage');
      } else {
        this.$store.commit('insertTodos');
      } 
    },
    watch: {
      todos: {
        deep: true,
        handler() {
          this.$store.commit('setStorage');
        } 
      }
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    background-color: rgb(233, 223, 201);
    background: linear-gradient(351deg, rgb(212, 200, 178) 0%, rgb(226, 219, 197) 100%);
    min-height: 100vh;
    padding: .5rem;
    z-index: -1;
  }

  body:after {
    content: '';
    position: fixed;
    background-image: url('./assets/wood-texture.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: .1;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .site-container {
    position: relative;
    margin: 1.5rem auto;
    max-width: 800px;
    min-height: 1000px;
    border-top: 2px solid rgba(255, 255, 255, 0.386);
    border-left: 2px solid rgba(255, 255, 255, 0.29);
    z-index: 0;
    padding: 1.5rem 1.5rem 3rem 1.5rem;
    background-color: rgb(250, 249, 249);
    background: linear-gradient(351deg, rgb(240, 240, 240) 0%, rgba(255,255,255,1) 100%);
    box-shadow: 1px 0px 12px rgba(12, 5, 5, 0.1),
                -1px 0px 12px rgba(0, 0, 0, 0.1);
  }

  .site-container::after {
    content: '';
    background-image: url('./assets/ppr-texture.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    opacity: .1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  .site-container > * {
    position: relative;
    z-index: 100;
  }
  
  h1 {
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    font-size: 1.1rem;
    margin: 1.7rem 1rem 1rem 1rem;
  }

  @media screen and (min-width: 330px) {
    h1 {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 430px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 3rem;
    }
  }
</style>
