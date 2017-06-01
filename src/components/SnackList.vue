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
    snacks () {
      return this.$store.getters.allSnacks
    },
    snackSum () {
      return this.$store.getters.snackSum
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
