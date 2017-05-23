<template>
    <table class="table">
        <thead>
            <tr>
                <th>Typename</th>
                <th>Typeprice</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(snackType, key) in snackTypes">
                <td>{{ snackType.name }}</td>
                <td>{{ snackType.price | currency('€ ', 2)}}</td>
                <td><i @click="deleteSnackType(snackType)" class="fa fa-trash clickable"></i></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  computed: {
    snackTypes () {
      return this.$store.getters.snackTypes
    }
  },
  methods: {
    deleteSnackType (st) {
      this.$store.dispatch('deleteSnackType', st)
    }
  },
  name: 'settingTypeList',
  data () {
    return {}
  }
}
</script>

<style>
</style>
