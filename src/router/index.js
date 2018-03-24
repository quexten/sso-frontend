import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Privacy from '@/components/Privacy'
import VerifyMail from '@/components/VerifyMail'
import DataProtection from '@/components/DataProtection'
import ResetPassword from '@/components/ResetPassword'

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
      path: '/privacy',
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
    }
  ]
})
