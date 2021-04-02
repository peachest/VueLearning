<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tabbar{
    display: flex ;
    background-color: #f8f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.2);
  /*location : fixed ;*/
  /*align: center ;*/
  /*height: 49px;*/
  }
</style>