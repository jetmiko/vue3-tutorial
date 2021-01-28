// import { createRouter, createWebHistory } from 'vue-router'
import * as vueRouter from 'vue-router'
import DcHero from './pages/DcHero.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/DcHero',
    name: 'DcHero',
    component: DcHero
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './pages/Calendar.vue')
  },
  {
    path: '/Markdown',
    name: 'Markdown',
    component: () => import(/* webpackChunkName: "about" */ './pages/Markdown.vue')
  },
  {
    path: '/Slider',
    name: 'Slider',
    component: () => import(/* webpackChunkName: "about" */ './pages/Slider.vue')
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(process.env.BASE_URL),
  routes
})

export default router
