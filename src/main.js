import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
    }else if(to.matched.some(record => record.meta.forAuth)){ // User has to be authenticated else bounce user to login page
        if( (localStorage.getItem('lancers_token')) && (localStorage.getItem('lancers_expiration')) && (Date.now() < parseInt(localStorage.getItem('lancers_expiration'))) ) {
          next();
        }
        else{
          next({ path: '/login'});
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
