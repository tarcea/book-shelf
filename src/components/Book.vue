<template>
  <div class="book">
    <img :src="book.img" :alt="book.title" />
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
}
.book img {
  height: 250px;
  width: 170px;
}
</style>