<template>
  <!-- This component is currently only used when no todo is selected on update-page  -->
  <div class="update-todo">
      
      <h4 @click="updateIndex">{{ todo.title }}</h4>
      <span @click="removeTodo">X</span>

  </div>
</template>

<script>
export default {
  props: ['todo', 'index'],
  methods: {

    // Sets current todo to be updated
    updateIndex() {
      this.$store.commit('updateIndex', this.index);
      window.scrollTo(0,100);
    },

    removeTodo() {
      this.$store.commit('removeTodo', this.todo);
    },
  },
}
</script>

<style scoped>
  .update-todo {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin-top: 1rem;
  }

  .update-todo:hover {
    color: #333;
  }

  span {
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
  }

  h4 {
    font-family: monospace;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
  }
</style>