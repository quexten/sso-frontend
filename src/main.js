// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import mixin from './sso-api.js'
import VueCookie from 'vue-cookie'
import VueSVGCustomIcon from 'vue-svg-custom-icon'
Vue.use(VueSVGCustomIcon, { basePath: '/assets' })
Vue.use(Vuetify, {
  theme: {
    primary: '#ff5722',
    secondary: '#b0bec5',
    accent: '#2196F3',
    error: '#ff0000',
    google: '#4885ed',
    facebook: '#283593',
    email: '#7C4DFF',
    lightgrey: '#dadada'
  }
})

Vue.config.productionTip = false

Vue.use(router)
Vue.mixin(mixin)
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
