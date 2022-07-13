import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'find',
        component: () => import('@/views/Find') // 路由懒加载
      },
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'info',
        component: () => import('@/views/Info')
      },
      {
        path: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
