<template>
  <label for=""
    >{{ label }}
    <!-- 输入内容时，会报错 -->
    <!-- <input type="text" v-bind='$attrs' :value="value" v-on="$listeners" @input="$emit('input', $event.target.value)"> -->

    <!-- 报错原因：同时使用了v-on='$listeners'和@input='textInput'，v-on='$listeners'里的input事件的优先级高于显式的绑定的@input='textInput', -->
    <!-- 所以即使显式的绑定了@input='textInput'，输入框还是会显式为`[object InputEvent]`并报错 -->
    <!-- 解决： -->
    <!-- 因此，使用了v-on='$listeners'，就不必再用@input="textInput"显式绑定了，但是需要覆盖'$listeners'对象里的input事件 -->
    <!-- <input type="text" v-bind='$attrs' :value="value" v-on="inputListeners" @input="textInput"> -->

    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      v-on="inputListeners"
      @input="textInput"
      
    />
    <!-- @click='$emit("clickInupt", $event.target.value)' -->
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: String,
  },

  computed: {
    inputListeners() {
      let vm = this;
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        vm.$listeners,
        // 然后我们添加自定义监听器，或覆写一些监听器的行为
        {
          blur(e) {
            // test
            console.log(e.target.value, "-------------blur-child");
            return vm.$emit("blur", e.target.value + 2);
          },
          // 覆盖父组件传递的input事件，再手动触发该事件并传入value
          // 这里确保组件配合 `v-model` 的工作,必须覆盖，不然没效果
          input(e) {
            console.log(e.target.value, "input-child");
            return vm.$emit("input", e.target.value);
          },
          // 添加自定义监听器
          click(e) {
            vm.$emit("clickInupt", e.target.value);
          },
        }
      );
    },
  },
  mounted() {
    // console.log(this, "input----this");
  },

  methods: {
    textInput(e) {
      console.log(e.target.value, "-----input val");
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>