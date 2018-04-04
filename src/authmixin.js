/* eslint-disable */
const $script = require('scriptjs')
$script('//connect.facebook.net/en_US/sdk.js', () => {
  FB.init({
    appId: '2051613578444454',
    version: 'v2.10'
  })
})
$script('//apis.google.com/js/client:platform.js', () => {
  gapi.load('auth2', () => {
    if (!gapi.auth2.getAuthInstance()) {
      gapi.auth2.init({
        clientId: '181667355169-tg4re6sr04pllaaon3gl9mkbtu5mklr0.apps.googleusercontent.com'
      }).then((res) => {
        console.log(res)
      }, (err) => {
        console.log('error', err)
      })
    } else {
      console.log('No gauth instance')
    }
  })
})
var baseDomain = 'https://sso.staging.quexten.com'
const OothClient = require('ooth-client')
const oothClient = new OothClient({
  oothUrl: baseDomain + '/auth',
  sandalone: true
})

export default {
  methods: {
    setOnUserChanged: async function (onUserChanged) {
      this.onUserChanged = onUserChanged
    },
    logout: async function () {
      oothClient.logout()
    },
    status: async function () {
      return oothClient.status()
    },
    authenticateFacebook: async function () {

      FB.login(response => {
        oothClient.authenticate('facebook', 'login', {
          access_token: response.authResponse.accessToken
        }).catch(e => {
          alert(e.message)
        })
      }, {
        scope: 'email'
      })
    },
    authenticateGoogle: async function () {
      const auth2 = gapi.auth2.getAuthInstance()
      auth2.signIn().then((response) => {
        oothClient.authenticate('google', 'login', {
          id_token: response.Zi.id_token
        }).catch(e => {
          alert(e.message)
        })
      }, e => {
        alert(e.message)
      })
    },
    authenticateEmail: async function (email) {
      oothClient.authenticate('email', 'generate-login-token', {
        email: email
      }).catch(e => {
        alert(e.message)
      })
    },
    confirmEmailToken: async function(userId, token) {
      oothClient.authenticate('email', 'login', {
        userId: userId,
        token: token
      }).catch(e => {
        alert(e.message)
      })
    },
    subscribeToUser: async function (onUser) {
      oothClient.user().subscribe(user => {
        onUser(user)
      })
    },
    changeUsername: async function (username) {
      oothClient.method('profile', 'update', {
        username: username
      })
    }
  },
  created: function () {
    oothClient.start()
    const subscription = oothClient.user().subscribe(user => {
      this.user = user
    })
  }
}
