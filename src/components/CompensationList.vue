<template>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="compensation in compensations">
          <td>{{ new Date(compensation.date).toLocaleDateString() }}</td>
          <td>{{ compensation.amount | currency('€ ', 2) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td><strong>{{ compensationSum | currency('€ ', 2) }}</strong></td>
        </tr>
      </tfoot>
    </table>
</template>

<script>
export default {
  name: 'compensationList',
  data () {
    return {}
  },
  computed: {
    compensations () {
      return this.$store.getters.allCompensations
    },
    compensationSum () {
      return this.$store.getters.allCompensations.map(s => s.amount).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
    }
  }
}
</script>
