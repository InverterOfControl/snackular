<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">snackular</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <router-link to="/" :exact="true" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/snack-types" :exact="true" class="nav-link">Snack Types</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  data () { return { } }
}
</script>
