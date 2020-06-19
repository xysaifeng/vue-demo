<template>
  <div id="app">
    <!-- nav -->
    <div>
      <router-link to='/'>首页2</router-link>&nbsp;&nbsp;&nbsp;
      <!-- <router-link to='/home'>首页</router-link>&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link :to="{name: 'home' }">首页</router-link>&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link :to="{path: '/home' }">首页</router-link>&nbsp;&nbsp;&nbsp; -->
      <a href='javascript:;' @click="goHome">首页</a>&nbsp;&nbsp;&nbsp;

      <router-link to='/about'>关于</router-link>&nbsp;&nbsp;&nbsp;
      <!-- <router-link to='/mine'>个人</router-link>&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link :to="{name: 'mine', params: {name: 123} }">个人</router-link>&nbsp;&nbsp;&nbsp; -->

      <!-- <router-link :to="{path: '/mine/d', params: {id: 123} }">个人</router-link>&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link :to="{path: 'mine', query: {id: 1234} }">个人</router-link>&nbsp;&nbsp;&nbsp; -->

      <router-link to='/mine'>个人</router-link>&nbsp;&nbsp;&nbsp;
    </div>
    <!-- 路由出口 -->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    goHome() {
      console.log(this);
      this.$router.push({
        name: 'home',
        params: {
          name: 'tom'
        },
        query: {
          id: 100
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active {
  color: blue;
}
</style>
