<template>
  <div>
       <h1>Add a compensation.</h1>
       <form>
       <input type="text" v-model="compensationAmount" />
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
