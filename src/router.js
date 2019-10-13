import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/visitors/Landing.vue'
import Login from './views/visitors/Login.vue'
import Register from './views/visitors/Register.vue'
import Dashboard from './views/Dashboard.vue'
import Pricing from "./views/visitors/Pricing.vue"
// Invoice
import InvoiceIndex from "./views/invoice/Index.vue"
import NewInvoice from "./views/invoice/Create.vue"
import InvoiceSent from "./views/invoice/InvoiceSent.vue"
// Estimates
import EstimateIndex from "./views/estimate/Index.vue"
import NewEstimate from "./views/estimate/Create.vue"
// Projects
import ProjectIndex from "./views/project/Index.vue"
import NewProject from "./views/project/Create.vue"
import Tasks from "./views/project/Tasks.vue"
import Track from "./views/project/Track.vue"
import Documents from "./views/project/Documents.vue"
import ListProjects from "./views/project/List.vue"
import Collaborators from "./views/project/Collaborators.vue"

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',

  base: process.env.BASE_URL,
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
      path: '/track',
      name: 'Track',
      component: Track,
      meta: { forAuth: false }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { forAuth: true }
    },


    {
      path: '/estimate',
      component: EstimateIndex,
      children: [
        {
          path: '',
          name: 'NewEstimate',
          component: NewEstimate
        },
        {
          path: 'create',
          name: 'Create Estimate',
          component: NewEstimate
        },
      ],
      meta: { forAuth: true }
    },

    {
      path: '/project',
      component: ProjectIndex,
      children: [
        {
          path: '',
          name: 'List Project',
          component: ListProjects
        },
        {
          path: 'status',
          name: 'Projects',
          component: ListProjects
        },
        {
          path: 'create',
          name: 'New Project',
          component: NewProject
        },
        {
          path: 'documents',
          name: 'Documents',
          component: Documents
        },
        {
          path: 'tasks',
          name: 'Tasks',
          component: Tasks
        },
        {
          path: 'collaborators',
          name: 'Collaborators',
          component: Collaborators
        },
      ],
      meta: { forAuth: true }
    },

    {
      path: '/invoice',
      component: InvoiceIndex,
      children: [
        {
          path: 'create',
          name: 'New Invoice',
          component: NewInvoice
        },
        {
          path: 'sent',
          name: 'Invoice Sent',
          component: InvoiceSent
        },
      ],
      meta: { forAuth: true }
    },
  ]
})
