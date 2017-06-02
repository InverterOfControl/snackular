export const snackTypes = state => state.snackTypes.snackTypes

export const allSnacks = state => state.snacks.takenSnacks

export const allCompensations = state => state.compensations.compensations

export const totalBalance = state => (doApplyDiscount) => {
  var compensations = this.compensationSum(state)

  if (doApplyDiscount) {
    var numberOfSnacks = state.snacks.takenSnacks.map(s => s.amount).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    var packs = parseInt(numberOfSnacks / 3)

    var fixed = packs * 2

    var rest = (numberOfSnacks % 3) * 0.8

    return compensations - (fixed + rest)
  }

  return (compensations - this.snackSum(state))
}

export const compensationSum = state => {
  return state.compensations.compensations.map(s => s.amount).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
}

export const snackSum = state => {
  return state.snacks.takenSnacks.map(s => s.cost * s.amount).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
}
