<template>
  <div>
       <h4>Add a snacktype</h4>
       <form>
         <div class="form-group">
          <label for="typeName">Name</label>
          <input class="form-control" type="text" v-model="typeName" id="typeName"/>
        </div>
        <div class="form-group">
          <label for="typePrice">Price</label>
          <input class="form-control" type="text" v-model="typePrice" id="typePrice"/>
        </div>
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
