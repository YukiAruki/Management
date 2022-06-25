import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home'
import Mall from '@/views/mall/Mall'
import User from '@/views/user/User'
import Login from '@/views/login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    // 按需引入： () => import('@/views/home/home')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
  mode: 'hash',
  routes
})

export default router