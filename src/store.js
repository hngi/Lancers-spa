import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {HNG} from './api'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,

    frontend: process.env.VUE_APP_FRONTEND_URL,
    backend: process.env.VUE_APP_API_URL,
    fileRoot: process.env.VUE_APP_FILEROOT_URL,

    loggedUser: {
        action: '',
        profile: {
            avatar: '',
            name: '',
            email: '',
        },
        dashboard: {
            //
        },
        token: "",
        tokenExpires: "",
    },

    estimateForm: {
        step: 1,
        project: { },
        evaluation: {},
        client: {
            clientInfo: {}
        },
    }
  },

  mutations: {
    SET_TOKEN(state, payload) { // Assign generated token and expiration date to browser local storage and mutate values in state
        if(payload.reset){ // Only the autoLogin action passes a reset parameter to the payload object, hence in case of page refresh, logged in user's token is gotten back from local storage and reassigned to store state
          state.loggedUser.token =  payload.token,
          state.loggedUser.tokenExpires = payload.expiration
          state.authenticated = true
          state.loggedUser.action = "Page was refreshed"
        }else{ // doLogin has brought in a new user, so set new users token and expiration in local storage and update same in the store state
          localStorage.setItem('lancers_token', payload.token)
          localStorage.setItem('lancers_expiration', payload.expiration)
          //refresh_token = ""
          state.loggedUser.token = payload.token,
          state.loggedUser.tokenExpires = payload.expiration
          state.authenticated = true
        }
    },

    SET_USER: (state, profile) => { // Updates loggedUser state with details of logged in user
        state.loggedUser.profile.name = profile.name;
        state.loggedUser.profile.email = profile.email;
        state.loggedUser.profile.avatar = profile.avatar == null ? 'profile_images/placeholder.png' : profile.message.user.avatar;
    },

    DESTROY_TOKEN(state){ // Destroys localStorage session and unsets all values in loggedUser state
        localStorage.removeItem('lancers_token')
        localStorage.removeItem('lancers_expiration')
    },

    UNSET_USER: (state) => { // Updates loggedUser state with details of logged in user
        state.loggedUser = {
            profile: {
                avatar: 'profile_images/placeholder.png',
                name: '',
                username: '',
                email: '',
            },
            dashboard: '',
            token: "",
            tokenExpires: "",
        }
    },

    SELECT_PROJECT: (state, payload)=>{
        state.estimateForm.step = 2;
        state.estimateForm.project.type = payload.new !== '' ? 'new' : 'old';
        state.estimateForm.project.title = payload.new !== '' ? payload.new : payload.old;
        state.estimateForm.project.project_id = payload.id;
    },
    SET_ESTIMATE: (state, payload)=>{
        state.estimateForm.step = 3;
        state.estimateForm.evaluation.time = payload.time, 
        state.estimateForm.evaluation.price_per_hour = payload.price_per_hour, 
        state.estimateForm.evaluation.start = payload.start, 
        state.estimateForm.evaluation.end = payload.end, 
        state.estimateForm.evaluation.equipment_cost = payload.equipment_cost, 
        state.estimateForm.evaluation.sub_contractors = payload.sub_contractors, 
        state.estimateForm.evaluation.sub_contractors_cost = payload.sub_contractors_cost, 
        state.estimateForm.evaluation.similar_projects = payload.similar_projects, 
        state.estimateForm.evaluation.rating = payload.rating, 
        state.estimateForm.evaluation.currency_id = payload.currency_id
    },

    SELECT_CLIENT: (state, payload)=>{
        state.estimateForm.step = 4;
        state.estimateForm.client.type = payload.client;
    },

    SET_CLIENT_INFO: (state, payload)=>{
        state.estimateForm.step = 5;
        state.estimateForm.client.clientInfo.company_name = payload.company_name,
        state.estimateForm.client.clientInfo.stret = payload.stret,
        state.estimateForm.client.clientInfo.number = payload.number,
        state.estimateForm.client.clientInfo.city = payload.city,
        state.estimateForm.client.clientInfo.zip = payload.zip,
        state.estimateForm.client.clientInfo.country = payload.country,
        state.estimateForm.client.clientInfo.state = payload.state,
        state.estimateForm.client.clientInfo.contacts = payload.contacts
    },
    PREVIOUS_FORM: (state, payload)=>{
        if(payload.form === 'estimateForm') state.estimateForm.step = state.estimateForm.step - 1;
    },
  },

  actions: {
    logout: (context) => { // Logs out the user and destroys token
        context.dispatch('postData', {address: 'logout'})
        .then(response => {
            context.commit('DESTROY_TOKEN'); // You can add a promise to return a success code saying loggout successfull
            context.commit('UNSET_USER');
            router.push('/')
        })
        .catch(error => {
            //Send a notification to dev
        })      
    },

    doLogin: (context, payload) => { // Function for performing the login action
        // Passport authentication requirements, to be passed along side user name and password
        // payload.client_secret = process.env.VUE_APP_CLIENT_SECRET,
        // payload.client_id = process.env.VUE_APP_CLIENT_ID,
        // payload.grant_type = "password"

        return new Promise((resolve, reject) => {
        HNG.post(context.state.backend+"login", payload) // API call to laravel passport token generation route
            .then(response => { // if API call for authentication is passed below happens
                context.commit('SET_TOKEN', {token: response.data.data.access_token, expiration: response.data.data.expires_in + Date.now()});
                
                context.dispatch('fetchData', {address:'user'})
                .then(response=>{
                    context.commit('SET_USER', response.data);
                    router.push('/dashboard')
                })
                .catch(error=>{
                    reject(error)
                });               
                
            })
            .catch(error=>{
                reject(error.response.data)
            })
        })
    },

    autoLogin: context => { // Used in App.vue to persist user login state in case of page reload
        let token = localStorage.getItem('lancers_token')
        let expiration = localStorage.getItem('lancers_expiration')
  
        if(! token || ! expiration) // check if token and expiration is not set
        {
          context.commit('DESTROY_TOKEN') // Just incase only one of the 2 is set, destroy all of it
          router.push('/login') // then redirect to login
        }
        else
        {
          if(Date.now() > parseInt(expiration)) // if the 2 is set above, then check if the token has expired
          {
            context.commit('DESTROY_TOKEN') // destroy the expired token
            router.push('/login') // then redirect to login
          }
          else
          {
            context.dispatch('fetchData', {address:'user'})
                .then(response=>{
                    context.commit('SET_TOKEN', {token: token, expiration: expiration, reset: true}) // commit SET_TOKEN to reset token and expiration in state
                    context.commit('SET_USER', response.data)
                })
                .catch(error => {// If error occurs at any stage of loading the user data during refresh, then..
                    console.log('ERROR FROM AUTOLOGIN loaduser: '+error) //log error
                    context.commit('DESTROY_TOKEN') // destroy token
                    router.push('/login') // redirect to login
                })
          }
        }
      },

    /**
     *| UNIVERSAL ACTION FOR FETCHing/GETing API DATA 
    */
    fetchData: (context, payload) => {
        // INJECT TOKEN INTO REQUEST
        HNG.interceptors.request.use(function (request) {
            const token = payload.lancers_token ? payload.lancers_token : context.getters.getToken;
            if ( token != null ) {
                request.headers.Authorization = `Bearer ${token}`;
            }
            return request;
        }, function (error) {
            // alert('ERROR FROM POSTDATA INTERECEPTOR: '+error.response.data);
            return Promise.reject(error.response.data);
        });
        
        /**
         * Returning a promise to determine if action is still loading, failed or completed successfully
         */
        return new Promise((resolve, reject) => {
            HNG.get(payload.address)
                .then(response => {
                    resolve({
                        status:true, 
                        row: Object.keys(response.data).length, 
                        data:response.data
                    })
                })
                .catch(error => {
                    if(error.response.data.message === 'Unauthenticated.'){
                        context.commit('DESTROY_TOKEN');
                        context.commit('UNSET_USER');
                        router.push('/login')
                    }
                    // alert('ERROR FROM FETCHDATA: '+error.response.data);
                    reject(error.response.data)
                })
        })
    },

    postData: (context, payload, method='post') => {
        /**
         * SETTING REQUEST INTERCEPTOR FOR TOKEN
         **/
        HNG.interceptors.request.use(request => {
            const token = context.getters.getToken;
            if ( token != null ) {
                request.headers.Authorization = `Bearer ${token}`;
            }
            return request;
          },
          error => {
            // alert('ERROR FROM POSTDATA INTERECEPTOR: '+error.response.data);
            return Promise.reject(error.response.data);
          });

        // Returning a promise to determine if action is still loading, failed or completed successfully
        return new Promise((resolve, reject) => {
            method.toLowerCase() == 'put' ? HNG.put(payload.address, payload.data)
            :method.toLowerCase() == 'delete' ? HNG.delete(payload.address, payload.data)
            :HNG.post(payload.address, payload.data)
            .then(response => {
                if(payload.address === '/register'){
                    context.commit('SET_TOKEN', {token: response.data.data.access_token, expiration: response.data.data.expires_in + Date.now()});
                    context.dispatch('fetchData', {address:'user'})
                    .then(response=>{
                        context.commit('SET_USER', response.data);
                        router.push('/dashboard')
                    })
                    .catch(error=>{
                        reject(error.response.data)
                    });   
                }else{
                    resolve({
                        status:true, 
                        row: Object.keys(response.data).length, 
                        data:response.data
                    })
                }
                
            })
            .catch(error => {
                // alert('ERROR FROM POSTDATA: '+error.response.data)
                reject(error.response.data)
            })
        })
    },
  },

  getters: {
    isAuth(state){ 
        return state.isAuth;
    },               
    getToken(state){
        let token;
        let expiration;
        if(state.loggedUser.token && state.loggedUser.tokenExpires){
          token = state.loggedUser.token
          expiration = state.loggedUser.tokenExpires
        }else{ // If data in state changes but local storage still has token and expiration then use localstorage to set token and expiration
          token = localStorage.getItem('lancers_token')
          expiration = localStorage.getItem('lancers_expiration')
        }
  
        if(! token || ! expiration) // check if token exists now or return null
        {
          return null
        }
        else
        {
          if(Date.now() > parseInt(expiration)) // check if existing token has expired and return null if true or return true if otherwise
          {
            return null
          }
          else
          {
            return token
          }
        }
    },
    getDashboardData(state){ 
        return state.loggedUser.dashboard; 
    },     
    getFileRoot(state){
        return state.fileRoot;
    },
    getEstimateForm(state){
        return state.estimateForm;
    },

    isLoading:(state)=>(objectContext, btnId='', btnValue=null)=>{
        objectContext.loading = true;
        objectContext.error = null;  
        if(btnId !== ''){
            document.getElementById(btnId).disabled = true;
            document.getElementById(btnId).style = 'opacity: 0.5';
        }            
        if(btnValue !== null) document.getElementById(btnId).innerHTML = btnValue;
    },
    hasLoaded:(state)=>(objectContext, btnId='', btnValue=null)=>{ 
        objectContext.loading = false; 
        if(btnId !== ''){
            document.getElementById(btnId).disabled = false;
            document.getElementById(btnId).style = 'opacity: 1';
        }
        if(btnValue !== null) document.getElementById(btnId).innerHTML = btnValue;
    },
    
    scroll:(state)=>(top=0, left=0)=>{
        window.scrollTo({
            top: top,
            left: left,
            behavior: 'smooth'
        });
    },
  }
})
