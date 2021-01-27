<template>
  <div class="add-todo">
    <h2>Add New Todo</h2>
    <TodoForm />
  </div>
</template>

<script>
  import TodoForm from '../components/TodoForm.vue'

  export default {
    components: {
      TodoForm,
    }
  }
</script>

<style scoped>
  .add-todo {
    max-width: 750px;
    margin: .1rem auto;
    padding: 0 1.7rem;
  }

   h2 {
    margin-bottom: 2.5rem;
    text-decoration: underline;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
  }

</style>