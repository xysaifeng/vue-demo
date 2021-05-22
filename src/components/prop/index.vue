<template>
  <div>
    <!-- <BlogPost postTitle='varify'></BlogPost> -->
    <!-- <BlogPost post-title='varify'></BlogPost> -->
    <!-- 传递动态prop -->
    <!-- 传递对象的所以property:  v-bind="author"  -->
    <BlogPost 
      :post-title="'name is: ' + name + ' and age is: ' + age"
      :arrList='[{},{}]'
      :tag.sync='tag'
      :author2='author2'
      :people='people'
      v-bind="author" 
      title="like"
      class="foo"
      
      :style="{color: 'red'}"
    ></BlogPost>

    <div>父组件中的数据：{{author2}}</div>
    <hr>

    <div>
      <h4>禁用attribute</h4>
      <!-- inheritAttrs: false 和 $attrs组合模式允许你在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素： -->
      <BaseInput v-on:myEvent='myEvent' required placeholder="Enter your username" v-model.number="username" />
    </div>
    <hr>

    <my-comp postTitle='tom'></my-comp>
  </div>
</template>

<script>
import BlogPost from './blog-post'
import BaseInput from './base-input'
import {Person} from '@/utils'


export default {
  components: {
    BlogPost,
    BaseInput
  },
  data() {
    return {
      name: 'tom',
      username: '',
      tag: 'post tag',
      age: 12,
      author: {
        age: 22,
        name: 'jack'
      },
      people: new Person('tom', 12),
      author2: {
        age: 100,
        name: 'lorem'
      }
    }
  },
  methods:{
    myEvent(val) {
      console.log('val: ', val);
    } 
  },
  watch: {
    username(val) {
      console.log(val, '0----name');
    }
  }
}
</script>

<style>

</style>