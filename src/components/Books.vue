<template>
  <div class="books">
    <ul>
    <li v-for="book in books" :key="book.id" @click="() => this.$emit('filterBook', book.id)">
      <Book :book="book"/>
    </li>
    
  </ul>
  </div>
</template>

<script>
import Book from './Book'
export default {
  props: { books: Array, method: { type: Function }},
  data() {
    return {
      
    }
  },
  components: { Book },
  
  methods: {
    reverseArray(array) {
      const cloneArray = [ ...array ]
      this.booksReversed = cloneArray.reverse()
    },
  },
}
</script>
  
<style>
.books {
  /* width: 90%;
  margin: 0 auto; */
}
.books ul li {
    display: inline-block;
    width: 180px;
    height: 300px;
    /* background-color: orange; */
    text-align: center;
  }
.books ul {
  display: flex;
  justify-content: space around;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

/* .books ul li {
    list-style-type: none;
    margin-bottom: 16px;
  }
.books ul {
  display: flex;
  justify-content: space around;
} */
</style>