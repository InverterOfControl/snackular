<template>
  <div class="row">
      <div class="col-md-8">
          <h2>The Snacks</h2>
          <snackList></snackList>    
      </div>
      <div class="col-md-4">
          <newSnack></newSnack>    
      </div>
  </div>
</template>

<script>
import NewSnack from '@/components/NewSnack'
import SnackList from '@/components/SnackList'

export default {
  name: 'main',
  data () {
    return {
      snacks: [
        { date: new Date(), name: 'Snickers', amount: 2, cost: 1.6 },
        { date: new Date(), name: 'Mars', amount: 1, cost: 0.8 }
      ]
    }
  },
  components: {
    SnackList,
    NewSnack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .clickable{ cursor: pointer }
</style>
