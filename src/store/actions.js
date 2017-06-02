import * as types from './mutation-types'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const loadSnacks = ({commit, state}) => {
  api.get('/snack').then(function (snacks) {
    commit(types.SET_SNACKS, snacks)
  })
}

export const loadSnackTypes = ({commit, state}) => {
  api.get('/snackTypes').then(function (snackTypes) {
    commit(types.SET_SNACKTYPES, snackTypes)
  })
}

export const loadCompensations = ({commit, state}) => {
  api.get('/compensations').then(function (compensations) {
    commit(types.SET_COMPENSATIONS, compensations)
  })
}

export const addSnack = ({ commit, state }, snackType) => {
  api.post('/snack/add', {
    name: snackType.name,
    amount: 1,
    cost: snackType.price
  }).then(function (result) {
    commit(types.TAKE_SNACK, snackType)
  })
}

export const increaseSnack = ({ commit }, snackInstance) => {
  api.put('/snack/increase/' + snackInstance.id)
    .then(function (result) {
      commit(types.INCREASE_SNACK, snackInstance)
    })
}

export const decreaseSnack = ({ commit }, snackInstance) => {
  api.put('/snack/decrease/' + snackInstance.id)
    .then(function (result) {
      commit(types.DECREASE_SNACK, snackInstance)
    })
}

export const addSnackType = ({ commit, state }, snackType) => {
  api.post('/snackTypes/add', {
    name: snackType.name,
    price: snackType.price
  }).then(function (result) {
    commit(types.ADD_SNACKTYPE, snackType)
  })
}

export const deleteSnackType = ({ commit }, snackType) => {
  api.post('/snackTypes/remove/', {
    name: snackType.name
  }).then(function (result) {
    commit(types.DELETE_SNACKTYPE, snackType)
  })
}

export const addCompensation = ({ commit }, compensationAmount) => {
  api.post('/compensations/add', {
    amount: compensationAmount
  }).then(function (result) {
    const newId = result.data.createdId
    commit(types.ADD_COMPENSATION, { amount: compensationAmount, newId: newId })
  })
}

export const removeCompensation = ({ commit }, compensation) => {
  api.post('/compensations/remove/' + compensation.id)
    .then(function (result) {
      commit(types.REMOVE_COMPENSATION, compensation)
    })
}
