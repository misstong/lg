import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../vueRouter'

// 1. 注册路由插件
Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/about',
    name: 'About',
    component: ()=>import('../views/About')
  },
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home')
  }
]
// 2. 创建 router 对象
const router = new VueRouter({
  // mode:'history',
  mode:'hash',
  routes,
})

export default router
