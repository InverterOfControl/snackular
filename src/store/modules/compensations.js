import { ADD_COMPENSATION, REMOVE_COMPENSATION } from '../mutation-types'

// initial state
const state = {
  compensations: []
}

// mutations
const mutations = {
  [ADD_COMPENSATION] (state, compensationAmount) {
    state.compensations.push({date: new Date(), amount: parseFloat(compensationAmount)})
  },
  [REMOVE_COMPENSATION] (state, compensation) {
    state.compensations.splice(state.compensations.indexOf(compensation), 1)
  }
}

export default {
  state,
  mutations
}
