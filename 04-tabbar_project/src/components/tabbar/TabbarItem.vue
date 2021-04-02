<template>
  <div class="tabbar-item" @click="tab">
    <div v-if="isActive"><slot name="deactive-icon"></slot></div>
    <div v-else><slot name="active-icon"></slot></div>
    <div :style="activeStyle"><slot name="txt"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props:{
      path:{
        String,
        required: true,
      },
      activeColor:{
        String,
        default: 'red',
      },
    },

    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      },
    },
    methods: {
      tab(){
        if(!this.isActive)
          this.$router.push(this.path) ;
      },
    }

  }
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
</style>