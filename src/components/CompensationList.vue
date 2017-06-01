<template>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th colspan="3">Date</th>
          <th colspan="2">Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="compensation in compensations">
          <td colspan="3">{{ new Date(compensation.date).toLocaleDateString() }}</td>
          <td colspan="2">{{ compensation.amount | currency('€ ', 2) }}</td>
          <td><button @click="remove(compensation)" class="btn btn-warning btn-sm"><i class="fa fa-remove"></i></button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"></td>
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
      return this.$store.getters.compensationSum
    }
  },
  methods: {
    remove: function (comp) {
      this.$store.dispatch('removeCompensation', comp)
    }
  }
}
</script>
