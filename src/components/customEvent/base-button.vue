<template>
  <div>
    <button v-on='$listeners'>click me</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  mounted() {
    // console.log(this, 'btn this');
  }
}
</script>

<style>

</style>