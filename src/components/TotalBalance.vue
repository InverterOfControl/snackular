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
    totalBalance () {
      var compSum = this.$store.getters.allCompensations.map(s => s.amount).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)

      var debtSum = this.$store.getters.allSnacks.map(s => s.cost).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)

      return (compSum - debtSum).toFixed(2)
    },
    isPositive () {
      var compSum = this.$store.getters.allCompensations.map(s => s.amount).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)

      var debtSum = this.$store.getters.allSnacks.map(s => s.cost).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)

      return compSum > debtSum
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
