<template>
    <keep-alive>
    <div class="home">
       <h1> 首页</h1>
        <a :[disablEd]='abled'>{{msg}}---{{msg2}}</a><br>
        <span v-once>{{msg}}----{{msg2}}</span><br>
        <button @click="onclick">click</button>
        <div>
            <p>{{res()}}</p>
        </div>
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
    data() {
        return {
            abled: 'tom',
            disablEd: 'href',
            msg: 'jack',
            msg2: 'jack2'
        }
    },
    methods: {
        onclick() {
            this.msg = 'tom'
            this.msg2 = 'tom2'
        },
        res() {
            return Date.now()
        }
    },
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