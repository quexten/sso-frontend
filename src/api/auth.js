import axios from 'axios'

let apiEndpoint = process.env.API_ENDPOINT
let api = axios.create({
  baseURL: apiEndpoint + 'authenticate/'
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
      location.href = apiEndpoint + 'authenticate/primary/steam?redirect=' + redirectUrl
    },
    // Google
    signInWithGoogle: redirectUrl => {
      location.href = apiEndpoint + 'authenticate/primary/google?redirect=' + redirectUrl
    },
    // Discord
    signInWithDiscord: redirectUrl => {
      location.href = apiEndpoint + 'authenticate/primary/discord?redirect=' + redirectUrl
    },
    exchangeTokens: async (primaryAuthToken, secondaryAuthToken) => {
      return (await api.post('/exchange', {
        primaryAuthenticationToken: primaryAuthToken,
        secondaryAuthToken
      })).data
    }
  }
}
