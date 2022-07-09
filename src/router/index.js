import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/index"
  },
  {
    path: "/index",
    component: () => import('@/views/Index')
  },
  {
    path: "/cifList",
    component: () => import('@/views/CifList')
  },
  {
    path: "/newList",
    component: () => import('@/views/NewList')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
