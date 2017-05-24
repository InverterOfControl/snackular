<template>
  <div class="row">
      <div class="col-md-8">
          <h2>Snacks</h2>
          <snackList></snackList>
          <h2>Compensations</h2>
          <compensation-list></compensation-list>
          <total-balance class="pull-right"></total-balance>    
      </div>
      <div class="col-md-4">
          <newSnack></newSnack>    
      </div>
  </div>
</template>

<script>
import NewSnack from '@/components/NewSnack'
import SnackList from '@/components/SnackList'
import CompensationList from '@/components/CompensationList'
import TotalBalance from '@/components/TotalBalance'

export default {
  name: 'home',
  data () {
    return{}
  },
  components: {
    SnackList,
    NewSnack,
    CompensationList,
    TotalBalance
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .clickable{ cursor: pointer }
</style>
