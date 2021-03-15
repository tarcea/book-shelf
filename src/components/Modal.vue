<template>
  <div class="background" @click.self="closeModal">
    <div class="modal" :class="{dark: theme === 'dark'}">
      <slot name="title"></slot>
      <div class="actions">
        <slot name="form"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
       'theme',
    ],
    methods: {
      closeModal() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .modal {
    width: 350px;
    padding: 20px;
    margin: 100px auto;
    background: #ffffff;
    border-radius: 10px;
    /* box-sizing: border-box; */
  }
  .background {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  h3 {
    color: grey;
  }
  .modal.dark {
    background: crimson;
    color: #ffffff;
  }
  .modal.dark h3 {
    color: #ffffff;
  }
</style>
