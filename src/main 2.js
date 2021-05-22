import Vue from 'vue/dist/vue.esm.js'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

Vue.component('my-comp', {
  props: ['post-title'],
  template: '<div class="bar foo">hi {{postTitle}}</div>',
  // render: function(h) {return h('p', {class: 'bar foo foo3', id: 'i8'}, this.postTitle)}
})


Vue.component('item-todo', {
  template: '\
    <li>\
    {{title}}\
    <button @click="$emit(\'remove\')">remove</button>\
    </li>\
  ',
  props: {
    title: {
      type: String,
    }
  }
})

// 全局自定义按键修饰符别名
// Vue.config.keyCodes.vv=13;
// Vue.config.keyCodes['cams-down']=13;

Vue.config.keyCodes = {
  vv: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pauses": 13,
  up: [38, 87]
}

// 自动引入模块组件进行全局注册
// 2021年03月01日15:50:47

const requireComponent = require.context('./components/autoImport', true, /basic[A-Z]\w+\.(vue|js)$/)
// console.dir(requireComponent);
// console.dir(requireComponent.keys());

requireComponent.keys().forEach(fileName => {
  // console.log('fileName: ', fileName);
  // 获取组件对应的完整相对路径（相对于根路径的路径）
  // const fullPath = requireComponent.resolve(fileName)
  // 获取配置（组件内容）
  // console.log('fullPath：', fullPath);
  const componentConfig = requireComponent(fileName)
  // console.log('componentConfig: ', componentConfig);
  // 将文件名转为PascalCase风格来注册组件名
  fileName = fileName.replace(/\.\/(\w+)\.(vue|js)$/, function($1, $2) {
    // console.log(arguments, '0088');
    // console.log($2, '0088');
    return upperFirst(camelCase($2))
  }) 
  // console.log(fileName);
  Vue.component(fileName,
    // 如果这个组件是通过export.default来导出的，那么就会优先使用`.default`,否则回退到使用模块儿的根
    componentConfig.default || componentConfig
  )
});


Vue.config.productionTip = false;
{/* <anchored-heading :level='3'>
    Lorem ipsum dolor.
    <s>hhhh
        <div>uuuu</div>
    </s>
</anchored-heading> */}
let getChildrenTextContent = function(children) {
  // debugger;
  console.log(children, 999);
  return children.map(node => {
    return node.children ? getChildrenTextContent(node.children) : node.text
  }).join('===')
}


// [' Lorem ipsum dolor. ', ['hhhh ', ['uuu']]]

Vue.component('anchored-heading', {
  render: function (createElement) {
    // 创建kebab-case风格的ID
    console.log(getChildrenTextContent(this.$slots.default));
    let headingId = getChildrenTextContent(this.$slots.default).toLowerCase().replace(/\W+/g, '-').replace(/(^-|-$)/g, '')
    return createElement(
      'h' + this.level,   // 标签名称
      // this.$slots.default // 子节点数组
      {
        style: {color: 'red'}
      },
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },
  
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

new Vue({
  delimiters: ['${', '}'],
  router,
  render: h => h(App),
}).$mount('#app')
