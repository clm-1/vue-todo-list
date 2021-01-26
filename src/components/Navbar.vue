<template>
  <div class="navbar">
    <div class="link-wrapper">
      <router-link to="/" exact active-class="current">Home</router-link>
      <router-link to="/add-todo" active-class="current">Add Todo</router-link>
      <router-link to="/about" active-class="current">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHome: true,
      isAdd: false,
      isAbout: false,
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>
  .navbar {
    background-color: burlywood;
    padding: 1.2rem;
    width: 100%;
  }

  .link-wrapper {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    margin: .2rem;
    padding: .2rem;
    font-size: 1.1rem;
    color: #111;
    text-decoration: none;
    text-align: center
  }

  a:hover {
    color: rgb(63, 3, 63);
  }

  .current {
    border-radius: 10px;
    color: black;
    text-decoration: underline;
  }

  @media screen and (min-width: 500px) {
    .link-wrapper {
      flex-direction: row;
    }
  }

</style>