import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index'
import Default from '../views/Layout/default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/home',
    component: Default,
    children: [
      {
        name: 'home',
        path: '/home',
        component: Home
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('../views/About/index')
      },
      {
        name: 'guestbook',
        path: '/guestbook',
        component: () => import('../views/Guestbook/index')
      },
      {
        name: 'detail',
        path: '/detail',
        component: () => import('../views/BlogDetail/index')
      },
    ]
  },
  {
    name: 'works',
    path: '/works',
    component: () => import('../views/Works/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

export default router
