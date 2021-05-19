import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../components/404.vue'),
    meta: { title: '404 - Not Found' }
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { title: 'Finanzas Zen' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue'),
    meta: { title: '¿Que es Finanzas Zen?' }
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/course.vue'),
    meta: { title: 'Temario' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog.vue'),
    meta: { title: 'Blog' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
