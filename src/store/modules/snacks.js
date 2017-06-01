import { TAKE_SNACK, INCREASE_SNACK, DECREASE_SNACK } from '../mutation-types'

// initial state
const state = {
  takenSnacks: []
}

// mutations
const mutations = {
  [TAKE_SNACK] (state, snackType) {
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

  [INCREASE_SNACK] (state, snack) {
    var snackObj = state.takenSnacks[state.takenSnacks.indexOf(snack)]

    var avgCost = snackObj.cost / snackObj.amount
    snackObj.amount++
    snackObj.cost += avgCost
  },

  [DECREASE_SNACK] (state, snack) {
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
  }
}

export default {
  state,
  mutations
}
