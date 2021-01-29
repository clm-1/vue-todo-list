<template>
  <div class="update-todo">

    <h2>Update Todo</h2>

    <div v-if="this.$store.state.updateTodo.index >= 0" class="update-wrapper">
      <UpdateForm />
    </div>

    <!-- A simplified list of todos is shown when no todo is selected -->
    <!-- For example, when page is reloaded on update-page -->

    <div v-else class="update-list">
      <h2>No Todo Was Selected</h2>
      <div class="todo-list-wrapper">
        <UpdateList v-for="(todo, index) in todos" 
                    :key="index" 
                    :todo="todo"
                    :index="index" />
      </div>
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
    },
  }
</script>

<style scoped>
  .add-todo {
    max-width: 750px;
    margin: .1rem auto;
  }

   h2 {
    margin-bottom: 2.5rem;
    text-decoration: underline;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    font-size: 1rem;
  }

  .update-wrapper {
    margin-bottom: 3rem;
  }

  .todo-list-wrapper {
    max-width: 550px;
    margin: 3rem auto;
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