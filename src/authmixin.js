var baseDomain = 'http://localhost:3000'

export default {
  methods: {
    checkUser: async function (setLoggedIn) {
      const res = await fetch(baseDomain + '/auth/status', {
        method: 'GET',
        credentials: 'include'
      })
      const body = await res.json()
      setLoggedIn(body.user != null, body.user.local)
    },
    register: async function (email, password, setLoggedIn) {
      const res = await fetch(baseDomain + '/auth/local/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
        return
      }
      await this.loginWithEmailPassword(email, password, setLoggedIn)
    },
    changePassword: async function (oldPassword, newPassword) {
      const res = await fetch(baseDomain + '/auth/local/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: oldPassword,
          newPassword: newPassword
        }),
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
      }
    },
    changeUsername: async function (username) {
      const res = await fetch(baseDomain + '/auth/local/set-username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username
        }),
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
      }
    },
    loginWithEmailPassword: async function (email, password, setLoggedIn) {
      const res = await fetch(baseDomain + '/auth/local/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: password
        }),
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
        return
      }
      // Vue.set(this, 'user', body.user)
      setLoggedIn(true)
    },
    logout: async function (setLoggedIn) {
      const res = await fetch(baseDomain + '/auth/logout', {
        method: 'POST',
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
        // return
      }
      // Vue.set(this, 'user', null)
      setLoggedIn(false)
    },
    status: async function () {
      const res = await fetch(baseDomain + '/auth/status', {
        method: 'GET',
        credentials: 'include'
      })
      const body = await res.json()
      console.log(body)
    },
    verifyEmail: async function (token, userId) {
      const res = await fetch(baseDomain + '/auth/local/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: token,
          userId: userId
        }),
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
      }
    },
    forgotPassword: async function (username) {
      const res = await fetch(baseDomain + '/auth/local/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username
        }),
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
      }
    },
    resetPassword: async function (token, userId, password) {
      const res = await fetch(baseDomain + '/auth/local/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          token: token,
          newPassword: password
        }),
        credentials: 'include'
      })
      const body = await res.json()
      if (body.status === 'error') {
        alert(body.message)
      }
    }
  }
}
