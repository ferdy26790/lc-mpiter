import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

Vue.use(Vuex)

const state = {
  user: '',
  loggedIn: false
}

const mutations = {
  fetchDataUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  register ( { commit }, payload ) {
    http.post('/signup', {
      name: payload.name,
      password: payload.password,
      email: payload.email
    })
    .then((result) => {
      alert('register berhasil silahakan login')
    }).catch((err) => {
      console.error(err)
    })
  },
   signIn ( payload ) {
     http.post('/signin', {
       email: payload.email,
       password: payload.password
     })
     .then((result) => {
       console.log(result);
       commit('fetchDataUser', result)
     }).catch((err) => {
       console.error(err);
     })
   }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
