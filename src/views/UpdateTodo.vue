<template>
  <div class="update-todo">
    <h2>Update Todo</h2>
    <div v-if="this.$store.state.updateTodo.index >= 0" class="update-wrapper">
      <UpdateForm />
    </div>
    <div v-else class="todo-list-wrapper">
      <UpdateList v-for="(todo, index) in todos" 
                  :key="index" 
                  :todo="todo"
                  :index="index"/>
    </div>
    
  </div>
</template>

<script>
  import UpdateForm from '../components/UpdateForm.vue'
  import UpdateList from '../components/UpdateList.vue'

  export default {
    components: {
      UpdateForm,
      UpdateList,
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      },
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

  .todo-list-wrapper {
    width: 100%;
    padding: 0 3rem;
    margin-top: 3rem;
  }

</style>