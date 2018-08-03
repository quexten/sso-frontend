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
    }
  }
}
