import axios from 'axios'

let apiEndpoint = 'http://localhost:3000/api/v1/users'
let api = axios.create({
  baseURL: apiEndpoint
})

export default {
  createUser: async token => (await api.post('/new', {
    token: token
  })).data,
  updateUsername: async (userId, authenticationToken, username) => (await api.post('/' + userId + '/profile', {
    username: username
  })).data
}
