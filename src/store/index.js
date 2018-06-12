import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    signupUser ({commit}, payload) {
      const newUser = {
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email,
        mobile: payload.mobile,
        role: payload.role
      }
      // window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
      commit('setUser', newUser)
      window.lsd.set('user', newUser)
      window.lsd.set('token', payload.token)
    },
    signinUser ({commit}, payload) {
      const newUser = {
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email,
        mobile: payload.mobile,
        role: payload.role
      }
      commit('setUser', newUser)
      window.lsd.set('user', newUser)
      window.lsd.set('token', payload.token)
    },
    updateUser ({commit}, payload) {
      const updateUser = {
        fname: payload.fname,
        lname: payload.lname,
        email: payload.email,
        mobile: payload.mobile,
        role: payload.role
      }
      commit('setUser', updateUser)
      window.lsd.set('user', updateUser)
    },
    loading ({commit}, payload) {
      commit('setLoading', payload)
    },
    checkAuth ({commit}, payload) {
      if (window.lsd.get('user') && window.lsd.get('token')) {
        let u = window.lsd.get('user')
        const user = {
          fname: u.fname,
          lname: u.lname,
          email: u.email,
          mobile: u.mobile,
          role: u.role
        }
        commit('setUser', user)
      } else {
        commit('setUser', null)
        window.lsd.set('user', null)
        window.lsd.set('token', null)
        window.axios.defaults.headers.common['Authorization'] = null
      }
    },
    signoutUser ({commit}, payload) {
      commit('setUser', payload)
      window.lsd.set('user', payload)
      window.lsd.set('token', payload)
      window.axios.defaults.headers.common['Authorization'] = payload
    }
  },
  getters: {
    isUserAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    }
  }
})
