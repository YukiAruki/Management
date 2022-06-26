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
    redirect: '/home'
    // 按需引入： () => import('@/views/home/home')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requireAuth: true },
  },
  {
    path: '/mall',
    name: 'Mall',
    component: Mall,
    meta: { requireAuth: true },
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: { requireAuth: true },
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router