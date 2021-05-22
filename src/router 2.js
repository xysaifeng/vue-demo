import Vue from 'vue/dist/vue.esm.js'
// import Vue from 'vue'
import Router from 'vue-router';
// 一级路由

Vue.use(Router);

import Watcher from './components/watch'
import Todo from './components/addTodo'
import Events from './components/events'
import FormDemo from './components/form'
import PropDemo from './components/prop'
import CustomEvent from './components/customEvent'

import NoMatch from './views/NoMatch'

export let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/', redirect: { name: 'customEvent' }
        },
       
        {
            path: '/customEvent',
            name: 'customEvent',
            component: CustomEvent
        },
        {
            path: '*',
            name: '404',
            component: NoMatch
        },
    ]
})


// 全局路由全局守卫
router.beforeEach((to, from, next) => {
    next();
});

// 全局后置钩子
router.afterEach((to, from) => {

})

export default router;