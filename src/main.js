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
import app from './store/modules/app'
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
    authentication,
    app
  },
  plugins: [createPersistedState()]
})

Vue.config.productionTip = false

Vue.use(router)
Vue.mixin(authMixin)
Vue.mixin(usersMixin)
Vue.mixin(JWTWrapper)
Vue.use(VueCookie)

store.watch(state => state.authentication.tokens.primaryAuthToken, (newValue, oldValue) => {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: function () {
    if ('redirect' in this.$route.query) {
      this.$store.commit('setRedirect', this.$route.query.redirect)
    } else {
      this.$store.commit('removeRedirect')
    }

    if (this.$store.getters.isAuthenticated) {
      let redirect = this.$store.getters.redirect
      this.$store.commit('removeRedirect')

      if (redirect.substring(0, 1) === `/`) {
        this.$router.push(redirect)
      } else {
        location.href = redirect
      }
    }
  }
})
