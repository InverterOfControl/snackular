import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// the root, initial state object
const state = {
  snackTypes: [],
  takenSnacks: [],
  compensations: []
}

// define the possible mutations that can be applied to our state
const mutations = {
  TAKE_SNACK (state, snackType) {
    var snacksOfThisTypeToday = state.takenSnacks.filter(s => s.name === snackType.name && new Date(s.date).toDateString() === new Date().toDateString())

    if (snacksOfThisTypeToday.length > 0) {
      snacksOfThisTypeToday[0].amount++
      snacksOfThisTypeToday[0].cost += parseFloat(snackType.price)
    } else {
      const newSnack = {
        name: snackType.name,
        cost: parseFloat(snackType.price),
        amount: 1,
        date: new Date()
      }
      state.takenSnacks.push(newSnack)
    }
  },

  INCREASE_SNACK (state, snack) {
    var snackObj = state.takenSnacks[state.takenSnacks.indexOf(snack)]

    var avgCost = snackObj.cost / snackObj.amount
    snackObj.amount++
    snackObj.cost += avgCost
  },

  DECREASE_SNACK (state, snack) {
    var selectedSnack = snack
    var idx = state.takenSnacks.indexOf(selectedSnack)
    var snackObj = state.takenSnacks[idx]

    if (snackObj.amount === 1) {
      state.takenSnacks.splice(idx, 1)
    } else {
      var avgCost = snackObj.cost / snackObj.amount
      snackObj.amount--

      snackObj.cost -= avgCost
    }
  },

  ADD_SNACKTYPE (state, snackType) {
    const newSnackType = {
      name: snackType.name,
      price: snackType.price
    }

    state.snackTypes.push(newSnackType)
  },

  DELETE_SNACKTYPE (state, snackType) {
    state.snackTypes.splice(state.snackTypes.indexOf(snackType), 1)
  },

  ADD_COMPENSATION (state, compensationAmount) {
    state.compensations.push({date: new Date(), amount: parseFloat(compensationAmount)})
  },

  REMOVE_COMPENSATION (state, compensation) {
    state.compensations.splice(state.compensations.indexOf(compensation), 1)
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
})
