import axios from 'axios'

let apiEndpoint = `${process.env.API_ENDPOINT}/auth/`
let api = axios.create({
  baseURL: apiEndpoint
})

export default {
  methods: {
    // Email
    requestEmailSignIn: async (email, redirect) => api.post('/mail', {
      mail: email,
      redirect: redirect
    }).data,
    // Steam
    signInWithSteam: redirectUrl => {
      location.href = apiEndpoint + 'steam?redirect=' + redirectUrl
    },
    // Google
    signInWithGoogle: redirectUrl => {
      location.href = apiEndpoint + 'google?redirect=' + redirectUrl
    },
    // Discord
    signInWithDiscord: redirectUrl => {
      location.href = apiEndpoint + 'discord?redirect=' + redirectUrl
    },
    exchangeTokens: async (primaryAuthToken, secondaryAuthToken) => {
      return (await api.post('/exchange', {
        primaryAuthToken,
        secondaryAuthToken
      })).data
    }
  }
}
