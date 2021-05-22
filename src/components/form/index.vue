<template>
  <div>
    <input type="text" v-model="msg" /><br />
    <p>message is: {{ msg }}</p>
    <div>
      <!-- 单个复选框，绑定到布尔值 -->
      <input type="checkbox" name="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">是否选择:{{ checked }}</label>
    </div>
    <hr />
    <div>
      <input
        type="checkbox"
        id="jack"
        name="jack"
        value="jack"
        v-model="checkedNames"
      />
      <label for="jack">jack</label>
      <input
        type="checkbox"
        id="tom"
        name="tom"
        value="tom"
        v-model="checkedNames"
      />
      <label for="tom">tom</label>
      <input
        type="checkbox"
        id="mary"
        name="mary"
        value="mary"
        v-model="checkedNames"
      />
      <label for="mary">mary</label>
      <p>Checked names: {{ checkedNames }}</p>
    </div>

    <div>
      <div id="example-5">
        <select v-model="selected" style="width: 100px">
          <option disabled value="D">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
    </div>

    <div>
      <select v-model="selected2">
        <!-- 会默认选中第一项 如果不加 :value="option.value" 属性，则不会在输入框中显示one-->
        <!-- <option value="" style="display: none;"></option> -->
        <option :key='option.value' v-for="option in options" :value="option.value" >
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected2 }}</span>
    </div>

    <hr>
    <global></global>


    <div>
      <h3>修饰符</h3>
      <input type="text" id='inp' v-model.lazy.trim="input">
      <label for="inp">输入结果：{{input}}</label>
      <br>
       <input type="text" id='inp2' v-model.number="n">
    </div>
    <div>
      <item></item>
    </div>
    <hr>
    <span>component basic</span>
    <div>
      <!-- 当在组件中使用v-model时，实际上是：
        <custom-input
          :value='name'
          @input='name=$event'
        />
        所以，组件内部的input元素需要绑定value属性，绑定input事件同时触发名为‘input’的事件并传递target.value
       -->
      <CustomInput v-model="name">
        toms
      </CustomInput>
    </div>
    <hr>
    <div>
      <h3>使用局部组件</h3>
      <componentA></componentA>
    </div>
    <div>
      <h3>使用全局自动注入组件</h3>
      <!-- 因为全局注册时使用的PascalCase风格来命名组件，所以两种使用方式都可以 -->
      <basic-button></basic-button>
      <BasicButton></BasicButton>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue',不能这样引用，因为main和router中都是从/dist/vue.esm中引入的，所以会起冲突
import Vue from 'vue/dist/vue.esm'
import item from '../watch/item'
import CustomInput from './custom-input'

// 组件中创建全局组件
Vue.component('global', {
  data() {
    return { msg: 'tom' }
  },
  template: '<div>my comp {{msg}}</div>'
})

// 组件中创建局部组件
var componentA = {
  data() {return { msg: 'ok ? ' } },
  template: `<div>
    {{msg}}
  </div>`
}

export default {
  // el: '#app',// 会有警告：option "el" can only be used during instance creation with the `new` keyword.
  components: {
    // global,
    item,
    CustomInput,
    componentA
  },
  data() {
    return {
      msg: "",
      checked: false,
      name: '',
      // isDisabled: false,
      checkedNames: [],
      selected: "D",
      selected2: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      input: '',
      n: '9'
    };
  },

  watch: {
    n: {
      immediate: true,
      handler: function(val) {
        console.log(val);
        console.log(typeof val);
      }
    },
    /** */
    name(val) {
      console.log(val, '----custom input');
    }
  }
};
</script>

<style>
</style>