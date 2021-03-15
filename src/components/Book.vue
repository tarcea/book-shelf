<template>
  <div class="book">
    <img :src="book.img" :alt="book.title" />
    <!-- <h3>{{ book.title }}</h3>
    <p>{{ `by ${book.author}`}}</p> -->
  </div>
</template>

<script>
export default {
  props: {book: Object}
}
</script>

<style>
.book {
  display: inline-block;
  height: 500px;
  width: 200px;
  padding: 8px;
  text-align: justify;
  z-index: 1;
}

/* .book h3 {
  font-size: 12px;
  overflow: hidden;
}

.book p {
  font-size: 10px;
}  */

.book img {
  height: 250px;
  width: 170px;
}
</style>