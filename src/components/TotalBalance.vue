<template>
    <p>Total balance: <span v-bind:class="{positive: isPositive, negative: !isPositive}">{{ totalBalance | currency('€ ', 2)}}</span></p>
</template>

<script>
export default {
  name: 'totalBalance',
  data () {
    return {}
  },
  computed: {
    compensationSum () {
      return this.$store.getters.allCompensations.map(s => s.amount).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    },
    debtSum () {
      return this.$store.getters.allSnacks.map(s => s.cost).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    },
    totalBalance () {
      return (this.compensationSum - this.debtSum).toFixed(2)
    },
    isPositive () {
      return this.compensationSum > this.debtSum
    }
  }
}
</script>

<style>
  .positive {
      color: green;
  }
  .negative {
      color: red;
  }
</style>
