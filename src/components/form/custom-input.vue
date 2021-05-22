<template>
  <div>
    <!-- <input type="text" :value="value" @input='input'> -->
    <input type="text" :value="value" @input="$emit('input',$event.target.value)">
    <slot name='default'></slot>
    <global></global>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    input(e) {
      // console.log(e.target.value);
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>