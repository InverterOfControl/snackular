<template>
  <div>
       <h4>Add a compensation</h4>
       <form class="form-horizontal">
         <div class="form-group">
         <label for="amountInput">Amount</label>
         <input class="form-control" id="amountInput" type="text" v-model="compensationAmount" />
         </div>
          <button @click="add" class="btn btn-primary">Add compensation</button>
       </form>
  </div>
</template>

<script>
export default {
  name: 'newCompensation',
  data () {
    return {
      compensationAmount: 0
    }
  },
  methods: {
    add: function () {
      this.$store.dispatch('addCompensation', this.compensationAmount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
