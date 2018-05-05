alert('funcionando vue')
import vue from 'vue'
import vueRouter from 'vue-router'
import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(vueRouter)
Vue.use(axios,vueAxios)

import App from './app.vue'

const routes = [
]
const router = new vueRouter({
	mode:'history',
	routes
})

new Vue(Vue.util.extend({router}),App).$mount('#app')

