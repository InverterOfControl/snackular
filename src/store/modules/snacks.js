import { TAKE_SNACK, INCREASE_SNACK, DECREASE_SNACK, SET_SNACKS } from '../mutation-types'

// initial state
const state = {
  takenSnacks: []
}

// mutations
const mutations = {
  [TAKE_SNACK] (state, snackType) {
    var snacksOfThisTypeToday = state.takenSnacks.filter(s => s.name === snackType.name && new Date(s.createdOn).toDateString() === new Date().toDateString())

    if (snacksOfThisTypeToday.length > 0) {
      snacksOfThisTypeToday[0].amount++
    } else {
      const newSnack = {
        name: snackType.name,
        cost: parseFloat(snackType.price),
        amount: 1,
        createdOn: new Date()
      }
      state.takenSnacks.push(newSnack)
    }
  },

  [INCREASE_SNACK] (state, snack) {
    var snackObj = state.takenSnacks[state.takenSnacks.indexOf(snack)]

    snackObj.amount++
  },
  [DECREASE_SNACK] (state, snack) {
    var selectedSnack = snack
    var idx = state.takenSnacks.indexOf(selectedSnack)
    var snackObj = state.takenSnacks[idx]

    if (snackObj.amount === 1) {
      state.takenSnacks.splice(idx, 1)
    } else {
      snackObj.amount--
    }
  },
  [SET_SNACKS] (state, snacks) {
    state.takenSnacks = snacks.data
  }
}

export default {
  state,
  mutations
}
