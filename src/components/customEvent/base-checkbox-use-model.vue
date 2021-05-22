<template>
  <div>
    <!-- 组件中使用model属性 -->
    <input type="checkbox" :checked="checked" :value="value" @change="change" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked', // 将默认的value prop改为checked，value可用作他用
    event: 'change3',// 自定义触发函数名
  },
  props: {
    checked: Boolean, // checked依然需要在prop中声明
    value: [Boolean, String],
  },
  mounted() {
    // console.log(this, "model----this");
  },
  methods: {
    change(e) {
      // console.log(e.target.checked);
      console.log(e.target.value, '----------value');
      // this.$emit('input', e.target.checked)
      this.$emit("change3", e.target.checked);
    },
  },
};
</script>

<style>
</style>