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
  components: { Book },
}
</script>
  
<style>

.books ul li {
    display: inline-block;
    width: 180px;
    height: 300px;
    text-align: center;
  }
.books ul {
  display: flex;
  /* justify-content: space around; */
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-left: -37px;
}
</style>