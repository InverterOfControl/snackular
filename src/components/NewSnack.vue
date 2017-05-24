<template>
  <div>
       <form>
         <div class="form-group">
          <label class="mr-sm-2" for="inlineFormCustomSelect">What did you eat?</label>
           <select class="custom-select mb-2 mr-sm-2 mb-sm-0" v-model="newSnack">
            <option disabled value="">Please select a snack</option>
            <option v-for="type in snackTypes" v-bind:value="type">{{ type.name }}</option>
          </select>
          </div>
           <button @click="add" class="btn btn-primary">Add snack</button>
       </form>
  </div>
</template>

<script>
export default {
  name: 'newSnack',
  data () {
    return {
      newSnack: ''
    }
  },
  computed: {
    snackTypes () {
      return this.$store.getters.snackTypes
    },
    snacks () {
      return this.$store.getters.takenSnacks
    }
  },
  methods: {
    add: function () {
      this.$store.dispatch('addSnack', { name: this.newSnack.name, price: this.newSnack.price })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
