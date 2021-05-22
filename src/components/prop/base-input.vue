<template>
  <label for="">{{label}}
    <!-- 将父组件的attribute绑定到需要绑定的元素上而不是根元素label上 -->
    <input type="text" @click="$emit('myEvent', '789')" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)">
  </label>
</template>

<script>

export default {
  // 使用inheritAttrs: false 和 $attrs组合模式，可以手动决定父组件的 attribute 会被赋予哪个元素
  // 这个模式允许你在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素：
  inheritAttrs: false, // 禁用attribute继承
  props: {
    label: String,
    value: String
  }
}
</script>

<style>

</style>