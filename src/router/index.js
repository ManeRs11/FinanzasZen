import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../components/404.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/about.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/course',
      name: 'Course',
      component: () => import('../views/course.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/blog.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/payment/:id',
      name: 'Payment',
      component: () => import('../views/payment.vue'),
      meta: {
        requiresAuth: false
      }
    },
    // Authentication
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (!user) next('/')
      else next();
    })
  } else next()
});

export default router
