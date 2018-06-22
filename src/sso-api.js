import axios from 'axios'

let baseUrl = 'http://localhost:3000'

export default {
  methods: {
    signInEmail: function (email, err, success) {
      axios.post(baseUrl + '/authenticate/mail')
        .then(response => {
          console.log(response)
        })
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
