import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component:()=> import('@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component:()=> import('@/views/Home.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
