<template>
    <div class="row content">
        <div class="col-md-8">
            <h4>Snack Types</h4>    
            <snack-type-list></snack-type-list>
            
        </div>
        <div class="col-md-4">
            <new-snack-type></new-snack-type>
        </div>
        <div class="col-md-4 offset-md-8">
            
        </div>
    </div>
</template>

<script>
import SnackTypeList from '@/components/SnackTypeList'
import NewSnackType from '@/components/NewSnackType'

export default {
  name: 'settings',
  data () {
    return { }
  },
  components: {
    SnackTypeList,
    NewSnackType
  }
}
</script>
