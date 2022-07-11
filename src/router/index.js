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
    children: [
      {
        path: '/logreg',
        redirect: '/logreg/login'
      },
      {
        path: '/logreg/login',
        component: () => import('@/router/logreg/Login'),

      },
      {
        path: '/logreg/register',
        component: () => import('@/router/logreg/Register'),

      },
    ]
  },
  {
    path: "/shopcar",
    component: () => import('@/views/ShopCar'),
    meta: {
      needLogin: true
    }
  },
  {
    path: "/detail",
    component: () => import('@/views/Detail'),
    children: [
      {
        path: '/detail',
        redirect: '/detail/goodinfo'
      },
      {
        path: 'goodinfo',
        component: () => import('@/router/detail/GoodInfo'),

      },
      {
        path: 'comminfo',
        component: () => import('@/router/detail/CommInfo'),

      },
    ]
  },
  {
    path: "/supplier/:supp/:addressName/:imgsrc",
    component: () => import('@/views/Supplier'),
    name:'supplier'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    // 判断是否登录
    // 未登录
    // console.log(sessionStorage.getItem('token'));
    if (!sessionStorage.getItem('token')) {
      alert('该页面需要登录，请先登录')
      sessionStorage.setItem('toPath', to.path)
      router.push('/logreg')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
