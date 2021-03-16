<template>
  <div class="navbar">
    <p 
      @click="() => this.$emit('darkMode')"
    >
    <span v-if="darkMode">light mode</span>
    <span v-else>dark mode</span>
    </p>
    <p class="counter"><span class="focus">{{length}}</span> books on shelf</p>
    <p @click="() => this.$emit('showAdmin')">admin</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  components: { },
  props: ['showForm', 'length', 'darkMode'],
  
}
</script>

<style>
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    width: 100vw;
    background: rgb(27, 41, 70);
  }
  .navbar p {
    font-size: 16px;
    color: beige;
    font-weight: bold;
    cursor: pointer;
  }

 .counter {
   font-size: 10px !important;
 }
 .focus {
   font-size: 24px;
   color:orangered;
 }

</style>