<template>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="compensation in compensations">
          <td>{{ new Date(compensation.date).toLocaleDateString() }}</td>
          <td>{{ compensation.amount | currency('€ ', 2) }}</td>
          <td><button @click="remove(compensation)" class="btn btn-warning btn-sm"><i class="fa fa-remove"></i></button></td>
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
  },
  methods: {
    remove: function (comp) {
      this.$store.dispatch('removeCompensation', comp)
    }
  }
}
</script>
