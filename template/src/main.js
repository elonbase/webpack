{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#vuex}}
import Vuex from 'vuex'
import store from './stores'
{{/vuex}}
import App from './App'
{{#router}}
import router from './router'
{{/router}}
import * as filters from './filters'
import '@/permission' // permission control

Vue.config.productionTip = false
// 注册filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
const vRouter = new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  data: {
    eventHub: new Vue() // global event bus
  },
  template: '<App/>'
  {{/if_eq}}
})

Vue.use({
  vRouter
})
