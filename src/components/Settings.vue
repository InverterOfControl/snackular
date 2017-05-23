<template>
    <div class="row">
        <div class="col-md-12">
            <h2>Settings</h2>
        </div>
        <div class="col-md-8">
            <h2>Snack Types</h2>    
            <snack-type-list></snack-type-list>
            
        </div>
        <div class="col-md-4">
            <new-snack-type></new-snack-type>
        </div>
        <div class="col-md-8">
            <new-compensation></new-compensation>
        </div>
    </div>
</template>

<script>
import SnackTypeList from '@/components/SnackTypeList'
import NewSnackType from '@/components/NewSnackType'
import NewCompensation from '@/components/NewCompensation'

export default {
  name: 'settings',
  data () {
    return { }
  },
  components: {
    SnackTypeList,
    NewSnackType,
    NewCompensation
  }
}
</script>
