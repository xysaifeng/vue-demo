<template>
    <div class="mine">
       <h1>登录界面</h1>
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
   methods: {
       login() {
        //    1.登录成功
           window.isLogin = true;
        //    2.获取回调地址
        let redirect = this.$route.query.redirect;
        // console.log(redirect);
        if(redirect) {
            this.$router.push(redirect)
        }else {
            // 没有回调地址，去主面板
            this.$router.replace('/')
        }

       }
   }
}
</script>

<style scoped>
    h1 {
        color: yellow;
    }
</style>