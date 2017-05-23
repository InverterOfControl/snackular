<template>
  <div>
       <h1>Add a snacktype.</h1>
       <form>
          <input type="text" v-model="typeName" />
          <input type="text" v-model="typePrice" />
           <button @click="addSnackType" class="btn btn-primary">Add snacktype</button>
       </form>
  </div>
</template>

<script>
export default {
  methods: {
    addSnackType () {
      this.$store.dispatch('addSnackType', { name: this.typeName, price: this.typePrice })
    }
  },
  name: 'newSnackType',
  data () {
    return {
      typeName: '',
      typePrice: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
