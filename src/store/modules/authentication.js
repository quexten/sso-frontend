import userApi from '../../api/users'

const state = {
  tokens: {
    primaryAuthToken: null,
    parsedPrimaryAuthToken: null
  },
  user: null
}

// getters
const getters = {
  userId: (state, getters, rootState) => state.user === null ? null : state.user._id,
  user: (state, getters, rootState) => state.user,
  avatar: function (state, getters, rootState) {
    return state.user === null ? null : state.user.profile.avatar
  },
  audit: (state, getters, rootState) => state.user === null ? null : state.user.audit.events,
  username: (state, getters, rootState) => state.user === null ? null : state.user.profile.username
}

// mutations
const mutations = {
  setUsername (state, name) {
    state.user.profile.name = name
  },
  setAvatar (state, url) {
    state.user.profile.avatar = url
  },
  setUser (state, user) {
    state.user = user
  },
  setProfile (state, profile) {
    state.user.profile = profile
  }
}

// actions
const actions = {
  createUser: async ({ commit }, token) => {
    let user = await userApi.createUser(token)
    commit('setUser', user)
  },
  logout: async ({ commit }) => {
    commit('setUser', null)
  },
  setUsername: async ({ commit, state }, username) => {
    let userId = state.user._id
    let profile = await userApi.updateUsername(userId, null, username)
    commit('setProfile', profile)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
