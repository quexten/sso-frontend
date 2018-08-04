import axios from 'axios'

let apiEndpoint = 'https://api.sso.quexten.com/api/v1/users'
let api = axios.create({
  baseURL: apiEndpoint
})

export default {
  methods: {
    //  Profile
    getProfile: async (id) => {
      let result = await api.get(id + '/profile')
      let profileData = result.data
      return profileData
    },
    updateProfile: async (id, data) => {
      let result = await api.post(id + '/profile', data)
      let profileData = result.data
      return profileData
    },

    //  Primary Factors
    getPrimaryFactors: async () => {
      let result = api.get('/profile')
      let profileData = result.data
      return profileData
    },
    getSecondaryFactors: async () => {
    },

    //  Audit Trail
    getAuditLog: async () => {

    }
  }
}
