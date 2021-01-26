<template>
  <div class="todo-list">
    <h1>This is the todo-list</h1>
    <TodoCard v-for="(todo, index) in todos" :key="index" :todo="todo"/>
    
  </div>
</template>

<script>
  import TodoCard from './TodoCard.vue'

  export default {
    components: {
      TodoCard,
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      }
    }
  }
</script>

<style scoped>

</style>