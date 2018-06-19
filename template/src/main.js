{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#vuex}}
import Vuex from 'vuex'
import stores from './stores'
{{/vuex}}
import App from './App'
{{#router}}
import router from './router'
{{/router}}
import * as filters from './filters'

Vue.config.productionTip = false
//注册filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

{{#vuex}}
Vue.use(Vuex)
const store = new Vuex.Store(stores)
{{/vuex}}

/* eslint-disable no-new */
new Vue({
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
  template: '<App/>',
  data: {
    eventHub: new Vue() //global event bus
  }
  {{/if_eq}}
})
