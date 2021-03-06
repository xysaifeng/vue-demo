import Vue from 'vue';
import Router from 'vue-router';
// 一级路由

Vue.use(Router);

import Watcher from './components/watch'
import NoMatch from './views/NoMatch'

export let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/', redirect: { name: 'watcher' }
        },
       
        {
            path: '/watcher',
            name: 'watcher',
            component: Watcher
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