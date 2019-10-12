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


router.beforeEach(
  (to, from, next)=>{

    if(!to.matched.some(record => record.meta.forAuth)){ //Confirm User is a visitor, otherwise take him to an authenticated route
      if( (localStorage.getItem('lancers_token')) && (localStorage.getItem('lancers_expiration')) && (Date.now() < parseInt(localStorage.getItem('lancers_expiration'))) ) {
        next({ path: '/'});
      }
      else{
        next();
      }
    }else {
      next();
    }
    
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
