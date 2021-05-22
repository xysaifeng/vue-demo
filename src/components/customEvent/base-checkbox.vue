<template>
  <div>
    <!-- 自定义组件上使用v-model默认情况 -->
    <input type="checkbox" :checked="value" @change="change" />
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  mounted() {
    // console.log(this, "----this");
  },
  methods: {
    change(e) {
      // console.log(e.target.checked);
      // this.$emit('input', e.target.checked)
      this.$emit("input", e.target.checked);
    },
  },
};
</script>

<style>
</style>