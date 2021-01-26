<template>
  <div class="add-todo">
    <h1>Add New Todo</h1>
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

<style>

</style>