// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import authMixin from './api/auth.js'
import usersMixin from './api/users.js'
import VueCookie from 'vue-cookie'
import VueSVGCustomIcon from 'vue-svg-custom-icon'
import JWTWrapper from './api/JWTWrapper'
import authentication from './store/modules/authentication'
import createPersistedState from 'vuex-persistedstate'

Vue.use(VueSVGCustomIcon, { basePath: '/assets' })
Vue.use(Vuetify, {
  theme: {
    primary: '#ff5722',
    secondary: '#b0bec5',
    accent: '#3d3d3d',
    error: '#ff0000',
    google: '#4885ed',
    facebook: '#283593',
    email: '#7C4DFF',
    titlebar: '#000000',
    steam: '#000000',
    discord: '#7289DA'
  }
})

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    authentication: authentication
  },
  plugins: [createPersistedState()]
})

Vue.config.productionTip = false

Vue.use(router)
Vue.mixin(authMixin)
Vue.mixin(usersMixin)
Vue.mixin(JWTWrapper)
Vue.use(VueCookie)

store.watch(state => state.authentication.user, (newValue, oldValue) => {
  if (oldValue === null && newValue !== null) {
    router.push('/account')
  }
  if (oldValue !== null && newValue === null) {
    router.push('/')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: function () {
    if (this.$store.getters.user !== null) {
      this.$router.push('/account')
    }
  }
})
