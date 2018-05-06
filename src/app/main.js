import Vue from 'vue'

import VueRouter from  'vue-router';
Vue.use(VueRouter)

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios)

import App from './App.vue'



new Vue({
  el: '#app',
  render: h => h(App)
})
