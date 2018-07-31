import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import LoginEmail from '@/components/LoginEmail'
import LoginEmailConfirmation from '@/components/LoginEmailConfirmation'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login/email',
      name: 'Sign in Via Email',
      component: LoginEmail
    },
    {
      path: '/login/email/callback',
      name: 'LoginEmailConfirmation',
      component: LoginEmailConfirmation
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
