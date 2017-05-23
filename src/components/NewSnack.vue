<template>
  <div>
       <h1>Add a snack.</h1>
       <form>
           <select v-model="newSnack">
            <option disabled value="">Please select a snack</option>
            <option v-for="type in snackTypes" v-bind:value="type">{{ type.name }}</option>
          </select>
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
