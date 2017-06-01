<template>
  <div>
    <p>Total balance: <span v-bind:class="{positive: isPositive, negative: !isPositive}">{{ totalBalance | currency('€ ', 2)}}</span></p>
    <button class="btn btn-sm btn-secondary" v-bind:class="{active: doApplyDiscount}" @click="applyDiscount">{{doApplyDiscount ? "Discounted" : "Undiscounted"}}</button>
  </div>
</template>

<script>
export default {
  name: 'totalBalance',
  data () {
    return {
      doApplyDiscount: false
    }
  },
  methods: {
    applyDiscount () {
      this.doApplyDiscount = !this.doApplyDiscount
    }
  },
  computed: {
    compensationSum () {
      return this.$store.getters.compensationSum
    },
    debtSum () {
      return this.$store.getters.snackSum
    },
    totalBalance () {
      return this.$store.getters.totalBalance(this.doApplyDiscount).toFixed(2)
    },
    isPositive () {
      return this.$store.getters.totalBalance(this.doApplyDiscount) >= 0
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
