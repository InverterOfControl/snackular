<template>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Cost</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="snack in snacks">
          <td>{{ new Date(snack.date).toLocaleDateString() }}</td>
          <td>{{ snack.name }}</td>
          <td>{{ snack.amount }}</td>
          <td>{{ snack.cost | currency('€ ', 2) }}</td>
          <td><i @click="increase(snack)" class="fa fa-plus clickable"></i>&nbsp;<i @click="decrease(snack)" class="fa fa-minus clickable"></i></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"></td>
          <td><strong>{{ snackSum | currency('€ ', 2) }}</strong></td>
        </tr>
      </tfoot>
    </table>
</template>

<script>
export default {
  name: 'snackList',
  data () {
    return {}
  },
  computed: {
    compensations () {
      return this.$store.getters.allCompensations
    },
    snacks () {
      return this.$store.getters.allSnacks
    },
    snackSum: function () {
      var num = this.$store.getters.allSnacks.map(s => s.amount).reduce((a, b) => a + b, 0)

      var packs = parseInt(num / 3)

      var fixed = packs * 2

      var rest = (num % 3) * 0.8

      return fixed + rest

      // var sum = this.$store.getters.allSnacks.map(s => s.cost).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    }
  },
  methods: {
    decrease (snack) {
      this.$store.dispatch('decreaseSnack', snack)
    },
    increase (snack) {
      this.$store.dispatch('increaseSnack', snack)
    }
  }
}
</script>
