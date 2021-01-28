<template>
  <div class="todo-form">

    <form @submit.prevent="updateTodo">
      <label class="title-label" for="title">Title:</label>
      <input type="text" id="title" v-model="title" required autocomplete="off">

      <label for="desc">Description:</label>
      <textarea name="desc" id="desc" cols="30" rows="10" v-model="desc" required maxlength="240"></textarea>

      <label for="author">Author:</label>
      <input class="author-field" type="text" id="author" v-model="author" required autocomplete="off">

      <input class="submit-btn" type="submit" value="Update">
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.updateTodo.title,
      desc: this.$store.state.updateTodo.desc,
      author: this.$store.state.updateTodo.author,
    }
  },
  methods: {
    updateTodo() {
      const today = new Date();
      const date = today.toLocaleDateString('sv-SE');
      const zero = today.getMinutes < 10 ? 0 : '';
      const time = `${today.getHours()}:${zero}${today.getMinutes()}`
    
      const updatedInfo = {
        title: this.title,
        desc: this.desc,
        author: this.author,
        time: `${date} ${time} (Edited)`,
      }

      this.$store.commit('updateTodo', updatedInfo);
      this.$router.push('/');

      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
  form {
    font-size: 1.1rem;
    font-family: monospace;
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  form > label {
    margin-top: .8rem;
    margin-bottom: .3rem;
  }

  form > input,
  form > textarea {
    border: 1px solid rgba(66, 66, 66, 0.689);
    background: none;
    border-radius: 3px;
    min-height: 40px;
    padding: .5rem;
    font-size: .9rem;
    font-family: monospace;
  }

  input:active,
  input:focus,
  textarea:active,
  textarea:focus {
    outline: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.036);
  }

  form > label.title-label {
    margin-top: 0;
  }

  .author-field {
    margin-bottom: 2rem;
  }

  .submit-btn {
    width: 30%;
    margin-left: auto;
    padding: 0;
    background: none;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 3px;
    height: 2rem;
    font-size: 1.1rem;
    font-family: monospace;
  }

  .submit-btn:active {
    outline: none;
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.05);
  }

  .submit-btn:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  textarea {
    resize: none;
    max-height: 100px;
  }
</style>