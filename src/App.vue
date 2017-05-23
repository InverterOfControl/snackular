<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    'navbar': require('./nav/Navbar')
  }
}
</script>

<style>
</style>
