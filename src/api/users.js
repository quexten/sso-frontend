import axios from 'axios'

let apiEndpoint = `${process.env.API_ENDPOINT}/api/v1/`
let api = axios.create({
  baseURL: apiEndpoint
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
  })).data
}
