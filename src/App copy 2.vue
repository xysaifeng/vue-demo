<template>
  <div id="app">
    <h1>嵌套路由</h1>
    <div>
      <router-link to='/home'>首页</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to='/about'>关于</router-link>&nbsp;&nbsp;&nbsp;
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
