import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home'
import Mall from '@/views/mall/Mall'
import User from '@/views/user/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 按需引入： () => import('@/views/home/home')
  },
  {
    path: '/mall',
    name: 'Mall',
    component: Mall,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router