import axios from 'axios'

let baseUrl = 'http://localhost:3000'

export default {
  methods: {
    requestEmailSignIn: async function (email) {
      try {
        return await axios.post(baseUrl + '/authenticate/primary/mail', {
          mail: email
        }).data
      } catch (err) {
        throw new Error('Could not authenticate')
      }
    },
    verifyEmailSignIn: async function (token) {
      let response = await axios.post(baseUrl + '/authenticate/primary/mail/callback', {
        token: token
      })
      return response.data
    },
    exchangeToken: async function (token) {
      let response = await axios.post(baseUrl + '/authenticate/exchange', {
        primary: token
      })
      return response.data
    },
    signInTest: (id, router) => {
      axios.get(baseUrl + '/authenticate/test/callback?user=' + id)
        .then(response => {
          return response.data
        })
        .then(data => {
          let secondFactors = data.secondFactors
          if (secondFactors.length > 0) {
            console.log(router.push('/secondfactor'))
          }
        })
    },
    createTotp: (callback) => {
      axios.get(baseUrl + '/authenticate/totp/create')
        .then(response => {
          callback(response.data)
        })
    },
    secondFactorBackupCode: (code) => {
      axios.get(baseUrl + '/authenticate/backup-codes?code=' + code)
    },
    getAuditLog: function (id, err, success) {
      axios.get(baseUrl + '/users/' + id + '/audit')
        .then(response => {
          success(response.data)
        })
    }
  }
}
