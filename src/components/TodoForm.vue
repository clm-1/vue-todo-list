<template>
  <div class="todo-form">
    <form @submit.prevent="addTodo">

      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" required>

      <label for="desc">Description:</label>
      <textarea name="desc" id="desc" cols="30" rows="10" v-model="desc" required></textarea>

      <label for="author">Author:</label>
      <input type="text" id="author" v-model="author" required>

      <input type="submit" value="Add">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      desc: '',
      author: '',
    }
  },
  methods: {
    addTodo() {
      const today = new Date();
      const date = today.toLocaleDateString('sv-SE');
      const time = `${today.getHours()}:${today.getMinutes()}`

      const newTodo = {
        title: this.title,
        desc: this.desc,
        author: this.author,
        time: `${date} ${time}`,
      }

      this.$store.commit('addTodo', newTodo);

      this.title = '';
      this.desc = '';
      this.author = '';

      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>