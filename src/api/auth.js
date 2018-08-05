import axios from 'axios'

let apiEndpoint = 'http://localhost:3000/auth'

export default {
  methods: {
    requestEmailSignIn: async function (email) {
      try {
        return await axios.post(apiEndpoint + '/primary/mail', {
          mail: email
        }).data
      } catch (err) {
        throw new Error('Could not authenticate')
      }
    },
    verifyEmailSignIn: async function (token) {
      let response = await axios.post(apiEndpoint + '/primary/mail/callback', {
        token: token
      })
      return response.data
    },
    exchangeToken: async function (token) {
      let response = await axios.post(apiEndpoint + '/exchange', {
        primary: token
      })
      return response.data
    }
  }
}
