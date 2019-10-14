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

Vue.filter('capsfirst', function (value) {
  if (value !== null) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    return "";
  }
});

Vue.filter('slashtime', function (value) {
  return value.replace(/-/gi, "/");
});

Vue.filter('formatnum', function (value) {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
});


router.beforeEach(
  (to, from, next)=>{

    if(!to.matched.some(record => record.meta.forAuth)){ //Confirm User is a visitor, otherwise take him to an authenticated route
      if( (localStorage.getItem('lancers_token')) && (localStorage.getItem('lancers_expiration')) && (Date.now() < parseInt(localStorage.getItem('lancers_expiration'))) ) {
        next({ path: '/dashboard'});
      }
      else{
        next();
      }
    }else if(to.matched.some(record => record.meta.forAuth)){ // User has to be authenticated else bounce user to login page
      if( (localStorage.getItem('lancers_token')) && (localStorage.getItem('lancers_expiration')) && (Date.now() < parseInt(localStorage.getItem('lancers_expiration'))) ) {
        next();
      }
    else{
      next({ path: '/'});
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
