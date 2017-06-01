import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createPersistedState from 'vuex-persistedstate'
import snacks from './modules/snacks'
import snackTypes from './modules/snack-types'
import compensations from './modules/compensations'

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  modules: {
    snacks,
    snackTypes,
    compensations
  },
  actions,
  getters,
  plugins: [
    createPersistedState()
  ]
})
