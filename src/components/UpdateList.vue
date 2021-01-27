<template>
  <div class="update-todo">
      <h4 @click="updateIndex">{{ todo.title }}</h4>
      <span @click="removeTodo">X</span>
  </div>
</template>

<script>
export default {
  props: ['todo', 'index'],
  methods: {
    updateIndex() {
      this.$store.commit('updateIndex', this.index);
    },
    removeTodo() {
      this.$store.commit('removeTodo', this.todo);
    },
  }
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