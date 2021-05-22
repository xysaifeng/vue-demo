<template>
  <div>
    <a target='_blank' href="https://cn.vuejs.org/v2/guide/computed.html">watch</a>
    <h3>watch学习、class和style的绑定方式</h3>
    <div id='watch-example'>
      <p>
        ask a yes/no question:
        <input type="text" v-model="question">
      </p>
      <!-- <p :class="[isActive && 'active', has && 'has']">{{ answer }}</p> -->
      <!-- <p :class="{active: isActive, has: has, 'text-error': error}">{{ answer }}</p> -->
      <!-- <p :class="classObj2">{{ answer }}</p> -->

      <!-- 数组语法 -->
      <!-- <p :class="['active', 'has']">{{ answer }}</p> -->
      <!-- 这样写不生效 -->
      <!-- <p :class="[isActive, has]">{{ answer }}</p> -->
      <!-- 数组和对象结合的方式 -->
      
      <p :class="[{active: isActive, 'text-error': error}, 'has']">{{ answer }}</p>
      <!-- 这些class将会添加到该组件的根元素上面，且不会覆盖根元素上的class,即使同名 -->
      <my-comp class="foo bar"></my-comp>

      <!-- 绑定内联样式 -->
      <!-- <span :style="{width, 'font-size': fontSize+'px', fontWeight}">time is litter</span> -->
      <!-- 直接绑定一个样式对象 -->
      <!-- <span :style="styleObj">time is litter</span> -->
      <!-- 数组语法，可以将过个样式对象绑定到一个元素上 -->
      <span :style="[styleObj, styleObj2]">time is litter 2</span>
      <div :style="{display: ['-webkit-box', 'flex', '-ms-flexbox']}">hello</div>
    </div>

    <template v-show='false'>条件渲染</template>

    <p>列表渲染</p>
    <ol>
      <li v-for="(attr, key, index) in styleObj2" :key="key">{{index}}---{{attr}}</li>
    </ol>
    <div>
      <span v-for="n of '10'" :key='n'>{{n}}</span>
    </div>
    <ul>
      <!-- <li v-for="(todo,i) in todos" :key="i" v-if="todo.complete">{{todo.todo}}</li> -->
      <template v-for="(todo,i) in todos">
        <li :key="i" v-if="todo.complete">{{todo.todo}}</li>
      </template>

       <!-- <li v-for="(todo,i) in todos" :key="i">
         <template v-if="todo.complete">{{todo.todo}}</template>
       </li> -->
    </ul>
    <div>
      <ul>
        <li is='Item' :title="todo.todo" v-for="(todo,i) in todos" :key='i'></li>

        <!-- <Item :title="todo.todo" v-for="(todo,i) in todos" :key='i'/> -->
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import debounce from 'lodash/debounce'
import capitalize from 'lodash/capitalize'
import Item from './item'

export default {
  components: {
    Item
  },
  data() {
    return {
      isActive: true,
      has: true,
      error: '1',
      width: '200px',
      fontSize: '20',
      fontWeight: 'bold',
      todos: [
        {complete: false, todo: 'ajd'},
        {complete: true, todo: 'jack'},
        {complete: false, todo: 'tom'},
      ],
      styleObj: {
        width: '200px',
       'font-size': '20px',
        fontWeight: 'bold',
      },
      styleObj2: {
        height: '30px',
        transition: 'all 2s',
        transform: 'translateX(100px)'
      },
      classObj: {
        active: true,
        has: true,
        'text-error': true
      },
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },

  computed: {
    classObj2() {
      return {
        active: this.isActive && !this.error,
        has: true,
        'text-error': this.error && this.error === '1'
      }
    }
  },
  watch: {
    question(val, old) {
      // console.log(val, old, '-----val');
      this.answer = 'Waiting for you to stop typing...';
      this.debounceGetAnswer()
    }
  },
  created() {
    this.debounceGetAnswer = debounce(this.getAnswer, 500)
  },

  methods: {
    async getAnswer() {
      console.log(333);
      if(this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return;
      }
      this.answer = 'think...'
      try {
        let res = await axios.get('https://yesno.wtf/api')
        console.log(res, '------res');
        this.answer = capitalize(res.data.answer)
      } catch (error) {
        console.log('error: ', error);
      }
    }
  }
}
</script>

<style scoped>
  .active {
    color: red;
  }
</style>