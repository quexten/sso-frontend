import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import LoginEmail from '@/components/LoginEmail'
import LoginEmailConfirmation from '@/components/LoginEmailConfirmation'
import GoogleResponse from '@/components/GoogleResponse'
import Profile from '@/components/Profile'
import LoginTest from '@/components/LoginTest'
import SecondFactorSignIn from '@/components/SecondFactorSignIn'
import TotpSetup from '@/components/TotpSetup'
import BackupCodesSetup from '@/components/BackupCodesSetup'
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
      path: '/secondfactorsignin',
      name: 'SecondFactorSignIn',
      component: SecondFactorSignIn
    },
    {
      path: '/totpsetup',
      name: 'Totp',
      component: TotpSetup
    },
    {
      path: '/backupcodessetup',
      name: 'Backup-codes',
      component: BackupCodesSetup
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
