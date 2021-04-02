<template>
  <div>
    <div>this is Home</div>
    <input type="text" v-model="msg"></input>
    <button @click="abtn">点击发送信息</button>
  </div>
</template>

<script>
  import bus from '../../bus' ;

  export default {
    name: "Home",
    data(){
      return {
        msg: 'enter here',
      }
    },

    methods:{
      abtn(){
        bus.$emit('HomeEmitMsg', this.msg)
      }
    },

  }
</script>

<style scoped>

</style>