<template>
  <div>
    <p>title is {{title}}--{{id}}==={{icon}}</p>
    <button @click="change">change title</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    id: Number,
    icon: String,
  },
  methods: {
    change() {
      this.$emit('update:title', '华夏')
      this.$emit('update:id', 32)
      this.$emit('update:icon', 'warn')
    }
  },
  mounted() {
    console.log(this, '-------his');
  }
}
</script>

<style>

</style>