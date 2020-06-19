<template>
    <keep-alive>
    <div class="home">
       <h1> 首页</h1>
       <ul>
           <li>
               <router-link to='/home/news'>新闻</router-link>
               <!-- <router-link :to="{name: 'news'}">新闻</router-link> -->
               <!-- <router-link :to="{path: 'news'}">新闻</router-link> -->
               <!-- <router-link :to="{path: '/home/news'}">新闻</router-link> -->
           </li>
           <li>
               <router-link to='/home/shop'>购物</router-link>
           </li>
       </ul>
       <transition>
       <router-view class="home-page"></router-view>
       </transition>
    </div>
    
    </keep-alive>
</template>

<script>
export default {
    name: 'home',
    created() {
        console.log(this.$route, '======== home');
    }
}
</script>

<style scoped>
    h1 {
        color: green;
    }
    .home-page {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        border: 1px solid red;
        text-align: center;
    }
</style>