import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import Pricing from "./views/Pricing.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      meta: { forAuth: false }
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
      meta: { forAuth: false }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { forAuth: false }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { forAuth: false }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { forAuth: true }
    },
  ]
})
