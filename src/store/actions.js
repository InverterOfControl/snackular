import * as types from './mutation-types'

export const addSnack = ({ commit, state }, snackType) => {
  commit(types.TAKE_SNACK, snackType)
}

export const decreaseSnack = ({ commit }, snackInstance) => {
  commit(types.DECREASE_SNACK, snackInstance)
}

export const addSnackType = ({ commit, state }, snackType) => {
  commit(types.ADD_SNACKTYPE, snackType)
}

export const deleteSnackType = ({ commit }, snackType) => {
  commit(types.DELETE_SNACKTYPE, snackType)
}

export const increaseSnack = ({ commit }, snackInstance) => {
  commit(types.INCREASE_SNACK, snackInstance)
}

export const addCompensation = ({ commit }, compensationAmount) => {
  commit(types.ADD_COMPENSATION, compensationAmount)
}

export const removeCompensation = ({ commit }, compensation) => {
  commit(types.REMOVE_COMPENSATION, compensation)
}
