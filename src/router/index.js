import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import LoginEmail from '@/components/LoginEmail'
import LoginEmailConfirmation from '@/components/LoginEmailConfirmation'
import GoogleResponse from '@/components/GoogleResponse'
import Profile from '@/components/Profile'
import LoginTest from '@/components/LoginTest'
import SecondFactor from '@/components/SecondFactor'

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
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login-email',
      name: 'LoginEmail',
      component: LoginEmail
    },
    {
      path: '/auth/google',
      name: 'GoogleResponse',
      component: GoogleResponse
    },
    {
      path: '/login-email-confirmation',
      name: 'LoginEmailConfirmation',
      component: LoginEmailConfirmation
    },
    {
      path: '/test',
      name: 'LoginTest',
      component: LoginTest
    },
    {
      path: '/secondfactor',
      name: 'SecondFactor',
      component: SecondFactor
    }
  ]
})
