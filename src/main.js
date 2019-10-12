import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import other needed scripts
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
  // window.feather = require('feather-icons');

// import axios and set config here
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
