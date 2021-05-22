import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
  router,
  render: h => h(App),
}).$mount('#app')
