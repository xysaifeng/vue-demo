<template>
  <div>
    <p><strong>自定义组件的 v-model ${bar}</strong></p>
    <base-box v-model="checked" :value="val" />
    <!-- 子组件中使用model属性 -->
    <base-box2 v-model="foo" :value="bar" />
    <hr />

    <p><strong>将原生事件绑定到组件</strong></p>
    <!-- 在组件上调用原生事件：在组件的根元素上监听一个原生事件，可以使用v-on的.native修饰符 -->
    <!-- 如果不使用.native修饰符，则可以在组件上使用v-on='$listeners'属性 -->
    <!-- 注意：使用了修饰符后子组件的$listeners里不会再出现click -->
    <!-- 发现使用修饰符没有在子组件中使用v-on='$listeners'适用，在父组件中使用.native，子组件的根元素触发点击效果，-->
    <!-- 而不是仅仅在button按钮上触发，使用v-on='$listeners'则只会在button按钮上触发，更加灵活  -->
    <!-- <BaseButton @click.native="btnClick"></BaseButton> -->
    <BaseButton @click="btnClick"></BaseButton>

    <!-- .native在有的时候这是很有用的,但是在尝试监听一个类似 <input> 的非常特定的元素时，这并不是个好主意 -->
    <!-- 比如 <base-input> 组件可能做了如下重构，所以根元素实际上是一个 <label> 元素 -->
    <!-- 现在 <base-input> 组件是一个完全透明的包裹器了，也就是说它可以完全像一个普通的 <input> 元素一样使用了：所有跟它相同的 attribute 和监听器都可以工作，不必再使用 .native 监听器。 -->
    <base-input
      name="user"
      @focus="focus"
      @blur="blur"
      v-model="inputValue"
      label="plz: "
      @clickInupt="clickInupt"
    />
    <hr>
    <p><strong>使用.sync 修饰符</strong></p>
    <!-- <use-sync :title='title' @update:title="t => title = t"/> -->
    <!-- 为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符： -->
    <!-- <use-sync :title.sync='title' /> -->
    <!-- 当我们用一个对象同时设置多个prop时，可以将.sync和v-bind同时使用 -->
    <use-sync  v-model="foo" v-bind.sync="info" />
    <!-- 不使用.sync可以直接将对象写在html中，但是是用来.sync修饰符则不行 -->
    <!-- <use-sync v-model="foo" v-bind="{title: 'false', id:9, icon: 'user'}" /> -->
  </div>
</template>

<script>
import BaseBox from "./base-checkbox";
import BaseBox2 from "./base-checkbox-use-model";
import BaseInput from "./base-input";
import BaseButton from "./base-button";
import UseSync from "./use-sync";

export default {
  components: {
    BaseBox,
    BaseBox2,
    BaseInput,
    BaseButton,
    UseSync,
  },
  data() {
    return {
      s:'s',
      foo: true,
      bar: "is checked",

      checked: true,
      val: false,

      inputValue: "ok?",

      title: 'lorem',
      info: {
        id: 13,
        icon: 'user',
        title: 'lorem'
      }
    };
  },
  methods: {
    focus() {
      console.log("fouce");
    },
    blur(val) {
      console.log("blur-parent---------", val);
    },
    btnClick() {
      console.log("btnClick");
    },
    clickInupt(val) {
      console.log("inputClick------", val);
    },
  },
  watch: {
    checked(val) {
      console.log(val, "--------val");
    },
    foo(val) {
      console.log(val, "foo--------val");
    },
    inputValue(val) {
      console.log(val, "---------input vla watch");
    },
    title(val) {
      console.log('title changed --------', val);
    }
  },
};
</script>

<style>
</style>