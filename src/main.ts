import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRellax from 'vue-rellax'
import VueLazyload from 'vue-lazyload'
import CountryFlag from 'vue-country-flag'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const loadimage = require('../public/img/loading-img.gif')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const errorimage = require('../public/img/not-found.png')

Vue.component('country-flag', CountryFlag)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 2
})

Vue.use(VueRellax)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
