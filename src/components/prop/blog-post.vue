<template>
  <div  class="foo" style="color: blue;fontSize: 19px">
    prop is: {{postTitle}}
    <br>
    <span v-bind="$attrs">post tag is：{{tag}}</span>
    <p>{{arrList}}</p>

    <p>pass obj prop: {{name + age}}</p>
    <button @click="$emit('update:tag', 'hahha')">update</button>
    <hr>
    <p>子组件的数据：{{userInfo}}
      <button @click="changeUser">change</button>
    </p>

    <div>
      <h3>prop type是一个自定义构造函数</h3>
      <p>{{people}}</p>
    </div>
  </div>
</template>

<script>
import {Person} from '@/utils'

export default {
  // props:['postTitle']
  // 1.inheritAttrs默认为true，会将父组件中不被认作props的attribute绑定到子组件的html根元素上，
  // 设为false，会改变这一默认行为(但是，传递的未被子组件显示接受的prop title依然会传递到子组件的$attrs中)。
  // 2.即使inheritAttrs=false,通过在子组件中的使用$attrs又可以让这些attribute生效，
  // 用法是在子组件的任意html元素上通过v-bind="$attrs"绑定，显性的绑定到非根元素上
  // *注意：这个选项不影响 class 和 style 绑定。*
  inheritAttrs: false, // 如果不希望组件的根元素继承attribute，可以禁用attribute继承
  props: {
    tag: String,
    author2: Object,
    'post-title': {
      type: String
    },
    arrList: Array,
    age: Number,
    name: String,
    people: Person,
    // ['postTitle']: {
    //   type: String
    // }

    // ['post-title']: {
    //   type: String
    // }
  },
  data() {
   return {
      userInfo: this.author2
   }
  },
  mounted() {
    console.log(this, '----his');
  },
  methods: {
    changeUser() {
      // JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，
      // 在子组件中改变变更这个对象或数组本身将会影响到父组件的状态

      // 父组件的age也会变为999
      this.userInfo = Object.assign(this.userInfo, {age: 999})
    }
  },
  updated() {
    // console.log(arguments, '-------args');
  }
}
</script>

<style>

</style>