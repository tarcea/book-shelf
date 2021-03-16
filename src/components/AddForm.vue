<template>
<div class="form_container">
  <form ref="addForm" class="add_form" @submit="onFormSubmit">
    <label>Title</label>
    <input type="text" v-model="book.title" placeholder="title"/>
    <label>Author</label>
    <input type="text" v-model="book.author" placeholder="author"/>
    <label>Image url</label>
    <input type="text" v-model="book.img"/>
    <label>Description</label>
    <textarea v-model="book.about" placeholder="about"></textarea>
    <label></label>
    <input type="submit" value="Submit" class="submit_button"> 
  </form>
  </div>
  <div class="clear">
  <button @click="clearForm">clear form</button>
  <button @click="cancelSubmit">cancel form</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: '',
        author: '',
        about: '',
        img: 'https://www.thethoughtfinder.co.uk/wp-content/uploads/2017/04/BOOK-PLACEHOLDER-3.png'
      }
    }
  },
  methods: {
    clearForm() {
      this.$refs.addForm.reset();
      // console.log(this.$refs.addForm)
    },
    onFormSubmit(e) {
      const { title, author, about, img } = this.book
      e.preventDefault()
      this.book = {...this.book, title, author, about, img}
      this.$emit('submitForm', this.book)
      // e.target.reset();
    },
    cancelSubmit() {
      this.clearForm()
      this.$emit('cancelForm')
    }
  },
  
}
</script>

<style>

.form_container {
  display:flex;
  justify-content:center;
}
.form_container form { 
  margin-bottom: 10px; 
  display: grid; 
  grid-template-columns: 1fr 4fr; 
  gap:10px;
} 
.form_container form input textarea {
  width: 100%;
}
.form_container label {
  text-align:justify;
  font-size: 10px;
}
.submit_button {
  width: 100%;
}
input[type='tex'], textarea { font-family: Avenir, Helvetica, Arial, sans-serif; }
.clear {
  width: 220px;
  margin-bottom: 30px;
  margin-left: 47%;
}
</style>