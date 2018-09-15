import axios from 'axios'

let apiEndpoint = process.env.API_ENDPOINT
let api = axios.create({
  baseURL: apiEndpoint + 'api/v1/users'
})

export default {
  createUser: async token => (await api.post('/new', {
    token: token
  })).data,
  getUser: async (userId, token) => (await api.get(`/${userId}/`, {
    headers: {
      'Session-Token': token
    }
  })).data,
  deleteUser: async (userId, token) => (await api.delete(`/${userId}/`)).data,
  updateUsername: async (userId, token, username) => (await api.post('/' + userId + '/profile', {
    username: username
  }, {
    headers: {
      'Session-Token': token
    }
  })).data,
  addPrimaryAuthenticator: async (userId, sessionToken, primaryToken) => {
    await api.post(`/${userId}/authenticators/primary/new`, {
      primaryAuthenticationToken: primaryToken
    }, {
      headers: {
        'Session-Token': sessionToken
      }
    })
  }
}
