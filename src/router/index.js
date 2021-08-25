import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: dashboard,
    children: [
      {
        path: '',
        component: () => import('../views/Overview.vue')
      },
      {
        path: 'people',
        component: () => import('../views/People.vue')
      },
      {
        path: 'user',
        component: () => import('../views/UserGroup.vue')
      },
      {
        path: 'transaction',
        component: () => import('../views/Transaction.vue')
      },
      {
        path: 'settings',
        component: () => import('../views/Setting.vue')
      },
      {
        path: 'api',
        component: () => import('../views/ApiKey.vue')
      },
      {
        path: 'logout',
        component: () => import('../views/Logout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router