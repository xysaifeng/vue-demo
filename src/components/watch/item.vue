<template>
  <div>
    <p>{{title}}</p>
    <!-- form 中的global组件用不了 -->
    <!-- 更正：form 中的global组件可以使用，之前说不可以使用是因为直接引入vue而不是vue/dist/vue.esm -->
    <global></global>
  </div>
  
</template>

<script>
export default {
  name: 'item',
  props: {
    title: {
      type: String,
      default: '都是'
    },
  },
  mounted() {
    console.log(this);
  }
}
</script>

<style>

</style>