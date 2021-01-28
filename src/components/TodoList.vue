<template>
  <div class="todo-list">
    <TodoCard v-for="(todo, index) in todos" 
              :key="index" 
              :todo="todo"
              :index="index"/>
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
      },
    },
  }
</script>

<style scoped>
  .todo-list {
    position:relative;
    margin: 0 auto;
    max-width: 750px;
  }
</style>