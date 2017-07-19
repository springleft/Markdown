// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Marked from 'marked'
import AMap from 'AMap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
     arr:[],
     show:{title:'',comment:''}
  },
  mutations: {
     add(msg,json){
            msg.arr.push(json)
     },
     de(msg,json){
            msg.arr.splice(json,1)
      
     },
     show(msg,json){
           msg.showarr=json
           
           
     }
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
