import { ADD_SNACKTYPE, DELETE_SNACKTYPE, SET_SNACKTYPES } from '../mutation-types'

// initial state
const state = {
  snackTypes: []
}

// mutations
const mutations = {
  [ADD_SNACKTYPE] (state, snackType) {
    const newSnackType = {
      name: snackType.name,
      price: snackType.price
    }

    state.snackTypes.push(newSnackType)
  },
  [DELETE_SNACKTYPE] (state, snackType) {
    state.snackTypes.splice(state.snackTypes.indexOf(snackType), 1)
  },
  [SET_SNACKTYPES] (state, snackTypes) {
    state.snackTypes = snackTypes.data
  }
}

export default {
  state,
  mutations
}
