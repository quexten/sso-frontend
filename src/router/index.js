import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Privacy from '@/components/Privacy'
import VerifyMail from '@/components/VerifyMail'
import DataProtection from '@/components/DataProtection'
import ResetPassword from '@/components/ResetPassword'
import LoginPassword from '@/components/LoginPassword'
import LoginEmail from '@/components/LoginEmail'
import LoginEmailConfirmation from '@/components/LoginEmailConfirmation'
import GoogleResponse from '@/components/GoogleResponse'
import Profile from '@/components/Profile'


Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: 'privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/verify-email',
      name: 'VerifyMail',
      component: VerifyMail
    },
    {
      path: '/data-protection',
      name: 'DataProtection',
      component: DataProtection
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/login-password',
      name: 'LoginPassword',
      component: LoginPassword
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
    }
  ]
})
