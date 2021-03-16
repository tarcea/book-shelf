<template>
  <form ref="inputForm" @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="book.title">
    <label>Author:</label>
    <input type="text" v-model="book.author">
    <label>Image url:</label>
    <input type="text" v-model="book.img">
    <label>About:</label>
    <textarea v-model="book.about"></textarea>
    <div class="submit">
      <button>submit</button>
    </div>
  </form>
</template>

<script>
export default {
  props: [ ],
  data() {
    return {
      book: {
        title: 'Title',
        author: 'Author',
        about: 'Describe your book',
        img: 'https://www.thethoughtfinder.co.uk/wp-content/uploads/2017/04/BOOK-PLACEHOLDER-3.png'
      },
    }
  },
  methods: {
    handleSubmit() {
      const { title, author, about, img } = this.book
      this.book = {...this.book, title, author, about, img}
      this.$emit('submitForm', this.book)
      this.$refs.inputForm.reset();
    },
    clearForm() {
      // console.log('gogo')
      this.$refs.inputForm.reset();
      // this.$emit('resetForm', this.$refs.inputForm.reset())
    },
    clear() {
      // this.clearForm()
      
    }
  }
};

</script>

<style scoped>
form {
  max-width: 420px;
  margin: 8px auto;
  background: white;
  text-align: left;
  padding: 30px;
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
textarea {
  resize: none;
  height: 100px;
}
button {
  background: crimson;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  display: flex;
  justify-content: space-evenly;
}
</style>