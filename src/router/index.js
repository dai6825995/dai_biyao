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
  },
  {
    path: "/search",
    component: () => import('@/views/Search')
  },
  {
    path: "/logreg",
    component: () => import('@/views/Logreg'),
    children:[
      {
        path:'/logreg',
        redirect:'/logreg/login'
      },
      {
        path:'/logreg/login',
        component:() => import('@/router/logreg/Login'),

      },
      {
        path:'/logreg/register',
        component:() => import('@/router/logreg/Register'),

      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
