import { ADD_SNACKTYPE, DELETE_SNACKTYPE } from '../mutation-types'

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
  }
}

export default {
  state,
  mutations
}
