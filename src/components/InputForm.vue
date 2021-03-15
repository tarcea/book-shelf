<template>
  <form>
    <label>Title:</label>
    <input type="text" required v-model="title">
    <label>Author:</label>
    <input type="text" required v-model="author">
    <label>Image url:</label>
    <input type="text" required v-model="url">
    <label>About:</label>
    <textarea v-model="about"></textarea>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      author: '',
      url: '',
      about: ''
    };
  },
};

</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaaaaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, textarea {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #dddddd;
  color: #555555;
}
</style>