import Vue from 'vue';
import Router from 'vue-router';
// 一级路由
import Login from '../src/views/Login'
import DashBoard from '../src/views/DashBoard';

// 二级路由
import Home from '../src/views/Home'
import About from '../src/views/About'
import Mine from '../src/views/Mine'
import NoMatch from '../src/views/NoMatch'

// 三级路由
import News from './views/News';
import Shop from './views/Shop';


// let NoMatch = {
//     template: '<div>404</div>'
// }
Vue.use(Router);

export let route =  new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/', redirect: '/home' 
        // },
        {
            path: '/', redirect: {name: 'about'}
        },
        // {
        //     path: '/', redirect: (to, ...rest) => { // error
        //         
        //         
        //         return '/about'; 
        //     }
        // },
        // {
        //     path: '/', redirect: function(to) { // error
        //         // 
        //         return to; 
        //     }
        // },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        // {
        //     path: '/mine/:name',
        //     name: 'mine',
        //     component: Mine
        // },
        {
            path: '/mine/:id',
            name: 'mine',
            // props: true,
            props: {
                name: 'tom'
            },
            component: Mine
        },
        {
            path: '*',
            name: '404',
            component: NoMatch
        },
    ]
})


export let route2 =  new Router({
    mode: 'history',
    routes: [
        {
            // path: '/', redirect: {name: 'home'}
            path: '/', redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                // { path: '/home', redirect: '/home/news'},
                { path: '/home', redirect: {name: 'news'}},
                { path: 'news', name: 'news', component: News },
                { path: 'shop', name: 'shop', component: Shop },
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '*',
            name: '404',
            component: NoMatch
        },
    ]
})


const router = new Router({
    mode: 'history',
    routes: [
        {
            // path: '/', redirect: {name: 'home'}
            path: '/', redirect: '/dashboard'
        },
        {
            path: '/login', name: 'login', component: Login
        },
        {
            path: '/dashboard', name: 'dashboard', component: DashBoard,
            children: [
                { path: '/dashboard', redirect: '/dashboard/home'},
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'about',
                    component: About
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: Mine
                },
            ]
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
    
    
    if(to.path !== '/login') { // 验证是否登录
        
        if(window.isLogin) { // 已经登录
            
            next()
        } else { // 没有登录，让他去登录
            
            next('/login?redirect='+to.path)
        }
    } else { // 不需要验证
        
        next();
    }
    // 
    // 放行
    // next();
});

// 全局后置钩子
router.afterEach((to, from) => {
    
    
  })

export default router;