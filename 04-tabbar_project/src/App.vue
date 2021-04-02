<template>
  <div id="app" class="body">
    <keep-alive>
      <router-view/>
    </keep-alive>

    <Tabbar>
      <tabbar-item path="/home">
        <img slot="active-icon" src="">
        <img slot="deactive-icon" src="">
        <div slot="txt">首页</div>
      </tabbar-item>

      <tabbar-item path="/about">
        <img slot="active-icon" src="">
        <img slot="deactive-icon" src="">
        <div slot="txt">关于</div>
      </tabbar-item>

      <tabbar-item path="/cart">
        <img slot="active-icon" src="">
        <img slot="deactive-icon" src="">
        <div slot="txt">购物车</div>
      </tabbar-item>

      <tabbar-item path="/profile">
        <img slot="active-icon" src="">
        <img slot="deactive-icon" src="">
        <div slot="txt">我的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/Tabbar";
import TabbarItem from "./components/tabbar/TabbarItem";
export default {
  name: 'App',
  components: {
    TabbarItem,
    Tabbar
  },
}
</script>

<style>
  @import "./assets/css/base.css" ;
</style>
