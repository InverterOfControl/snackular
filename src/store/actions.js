export const addSnack = ({ commit, state }, snackType) => {
  commit('TAKE_SNACK', snackType)
}

export const decreaseSnack = ({ commit }, snackInstance) => {
  commit('DECREASE_SNACK', snackInstance)
}

export const addSnackType = ({ commit, state }, snackType) => {
  commit('ADD_SNACKTYPE', snackType)
}

export const deleteSnackType = ({ commit }, snackType) => {
  commit('DELETE_SNACKTYPE', snackType)
}

export const increaseSnack = ({ commit }, snackInstance) => {
  commit('INCREASE_SNACK', snackInstance)
}

export const addCompensation = ({ commit }, compensationAmount) => {
  commit('ADD_COMPENSATION', compensationAmount)
}

export const removeCompensation = ({ commit }, compensation) => {
  commit('REMOVE_COMPENSATION', compensation)
}
