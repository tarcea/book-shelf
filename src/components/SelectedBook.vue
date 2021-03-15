<template>
  <div class="selected" v-if="book.img">
    <div v-if="admin" class="admin_menu">
      <div class="admin_icon">&#x2699; edit</div>
      <div class="admin_icon" @click="deleteMe">&#x2718; delete</div>
    </div>
    <div class="selected_title">
      <!-- <div> -->
        <img :src="book.img" alt="book picture" />
      <!-- </div> -->
      <div class="headers">
        <h3>{{ book.title }}</h3>
        <p>{{ `by ${book.author }`}}</p>
      </div>
    </div>
    <div class="about">
      <p>{{ book.about }}</p>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>

export default {
  props: [ 'book', 'admin'],
  components: {  },
  data() {
    return {
      
    }
  },
  methods: {
    deleteMe() {
      this.$emit('deleteBook', this.book.id)
    }
  }
}
</script>
  
<style>
.selected {
  /* display: flex; */
  /* flex-direction:column; */
  /* justify-content: center; */
  /* padding: 8px; */
  width: 80vw;
  margin: 0 auto;
  
}
.selected img {
  height: 350px;
  width: 250px;
  margin: 0 auto;
}
.selected_title {
  text-align: center;
}
.selected .headers {
  /* width: 100%; */
  /* margin: 0 auto; */
}
.selected .headers h3 {
  font-size: 14px;
}
.selected .headers p {
  font-size: 12px;
}
.about {
  text-align: justify;
  width: 100%;
  
}
.admin_icon {
  /* overflow: hidden; */
  font-size: 24px;
  padding-right: 64px;
  padding-left: 64px;
  color: orangered;
  cursor: pointer;
  /* position: relative; */
  /* top: 25px; */
  opacity: 80%;
  background:beige;
  width: 123px;
  margin: 0 auto;
}

.admin_menu {
  height: 0vh;
  text-align:justify;
}

</style>