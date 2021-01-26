<template>
  <div class="home">
    <h1>Things To Do</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'

export default {
 components: {
   TodoList,
 }
}
</script>

<style scoped>
  h1 {
    font-family: 'Courier New', Courier, monospace;
    text-decoration: underline;
    text-align: center;
  }
</style>
