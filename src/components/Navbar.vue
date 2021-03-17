<template>
  <div class="navbar">
    <p 
      @click="() => this.$emit('darkMode')"
    >
    <span v-if="darkMode">light mode</span>
    <span v-else>dark mode</span>
    </p>
    <p class="counter"><span :class="{focus: !darkMode, focus_active: darkMode}">{{length}}</span> books on shelf</p>
    <p @click="() => this.$emit('showAdmin')" :class="{active: adminMode}">admin</p>
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
  props: ['showForm', 'length', 'darkMode', 'adminMode'],
  updated() {

  }
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
    color: rgb(27, 41, 70);
    background: rgb(226, 183, 40);
  }
  .navbar p {
    font-size: 16px;
    /* color: beige; */
    font-weight: bold;
    cursor: pointer;
  }

 .counter {
   font-size: 10px !important;
 }
 .focus_active {
   font-size: 24px;
   color:rgb(226, 183, 40)
 }
 .active {
   border-bottom: 1px solid orangered;
 }
 .focus {
   font-size: 24px;
   color: rgb(78, 80, 238);
 }

</style>