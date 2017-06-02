import { ADD_COMPENSATION, REMOVE_COMPENSATION, SET_COMPENSATIONS } from '../mutation-types'

// initial state
const state = {
  compensations: []
}

// mutations
const mutations = {
  [ADD_COMPENSATION] (state, compensationDetails) {
    state.compensations.push({date: new Date(), id: compensationDetails.newId, amount: parseFloat(compensationDetails.amount)})
  },
  [REMOVE_COMPENSATION] (state, compensation) {
    state.compensations.splice(state.compensations.indexOf(compensation), 1)
  },
  [SET_COMPENSATIONS] (state, compensations) {
    state.compensations = compensations.data
  }
}

export default {
  state,
  mutations
}
