import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'Characters',
    component: () => import('../components/pages/Characters')
  },
    {
    path: '/seasons',
    name: 'Seasons',
    component: () => import('../components/pages/Seasons')
  },
    {
    path: '/episodes',
    name: 'Episodes',
    component: () => import('../components/pages/Episodes')
  },
    {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('../components/pages/Quotes')
  },
    {
    path: '/deaths',
    name: 'Deaths',
    component: () => import('../components/pages/Deaths')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
