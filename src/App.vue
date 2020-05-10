<template>
  <div id="app">
    <v-app>

      <myNav/>

      <router-view></router-view>

      <myFooter/>

    </v-app>
  </div>
</template>

<script>
import myNav from './components/Nav'
import myFooter from './components/Footer'
export default {
  el: '#app',
  components: {
    myNav,
    myFooter
  }
}
</script>

<style>
  template {

  }
</style>
