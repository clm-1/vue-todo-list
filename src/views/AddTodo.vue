<template>
  <div class="add-todo">

    <h2>{{ title }}</h2>
    <TodoForm />

  </div>
</template>

<script>
  import TodoForm from '../components/TodoForm.vue'

  export default {
    components: {
      TodoForm,
    },
    data() {
      return {
        title: 'Add New Todo',
      }
    }
  }
</script>

<style scoped>
  .add-todo {
    max-width: 750px;
    margin: .1rem auto;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    text-decoration: underline;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
  }

  @media screen and (min-width: 330px) {
    h2 {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 400px) {
    h2 {
      font-size: 1.4rem;
    }
  } 
</style>