import userApi from '../../api/users'
import authApi from '../../api/auth'
import jwtWrapper from '../../api/JWTWrapper'

const state = {
  tokens: {
    primaryAuthToken: null,
    parsedPrimaryAuthToken: null,
    secondaryAuthToken: null,
    sessionToken: null
  },
  user: null
}

// getters
const getters = {
  userId: (state, getters, rootState) => state.user === null ? null : state.user._id,
  user: (state, getters, rootState) => state.user,
  sessionToken: (state, getters, rootstate) => state.user === null ? null : state.tokens.sessionToken,
  parsedPrimaryAuthToken: (state) => state.tokens.parsedPrimaryAuthToken,
  primaryAuthToken: (state) => state.tokens.primaryAuthToken,
  primaryAuthenticators: (state) => state.user === null ? null : state.user.authentication.primary,
  avatar: function (state, getters, rootState) {
    return state.user === null ? null : state.user.profile.avatar
  },
  audit: (state, getters, rootState) => state.user === null ? null : state.user.audit.events,
  username: (state, getters, rootState) => state.user === null ? null : state.user.profile.username,
  isAuthenticated: (state, getters, rootState) => state.tokens.sessionToken
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
  },
  setSessionToken (state, token) {
    state.tokens.sessionToken = token
  },
  setPrimaryAuthToken (state, token) {
    state.tokens.primaryAuthToken = token
    state.tokens.parsedPrimaryAuthToken = token === null ? null : jwtWrapper.methods.decode(token)
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
    commit('setSessionToken', null)
  },
  setUsername: async ({ commit, state }, username) => {
    let userId = state.user._id
    let profile = await userApi.updateUsername(userId, state.tokens.sessionToken, username)
    commit('setProfile', profile)
  },
  exchangeTokens: async ({ commit, state }) => {
    let primaryAuthToken = state.tokens.primaryAuthToken
    let secondaryAuthToken = state.tokens.secondaryAuthToken
    let sessionToken = (await authApi.methods.exchangeTokens(primaryAuthToken, secondaryAuthToken)).token
    commit('setSessionToken', sessionToken)
    commit('setPrimaryAuthToken', null)
    let decodedToken = jwtWrapper.methods.decode(sessionToken)
    let userId = decodedToken.data.userId
    let user = await userApi.getUser(userId, sessionToken)
    commit('setUser', user)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
