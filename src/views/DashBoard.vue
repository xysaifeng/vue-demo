<template>
  <div>
    <h3>主面板</h3>
    <div class="nav">
      <router-link to="/dashboard/home">首页</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/dashboard/about">关于</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/dashboard/mine">个人</router-link>&nbsp;&nbsp;&nbsp;
    </div>
    <!-- 路由出口 -->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style scoped>
.router-link-active {
  color: blue;
}
</style>