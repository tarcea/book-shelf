<template>
<div v-if="admin && (!this.showEditModal && !this.showAddModal)" class="admin_menu">
  <div class="admin_icon" @click="showAddFormInModal">+ add</div>
  <div class="admin_icon" @click="showEditFormInModal">&#x2699; edit</div>
  <div class="admin_icon" @click="deleteMe">&#x2718; delete</div>
</div>
  <div class="selected" v-if="book.img">
    <div class="selected_title">
        <img :src="book.img" alt="book picture" />
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
  props: [ 'book', 'admin', 'showEditModal', 'showAddModal'],
  methods: {
    deleteMe() {
      this.$emit('deleteBook', this.book.id)
    },
    showAddFormInModal() {
      this.$emit('openAddFormModal')
    },
    showEditFormInModal() {
      this.$emit('openEditFormModal')
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
  
<style>
.selected {
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
  font-size: 24px;
  color: orangered;
  cursor: pointer;
  background:beige;
  width: 123px;
  margin: 0 auto;
  text-align: center;
}

.admin_menu {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 8px;
}

</style>