<template>
  <div id="app">
    <v-app>

      <myNav/>

      <myBody/>

      <myFooter/>

    </v-app>
  </div>
</template>

<script>
import myNav from './components/Nav'
import myBody from './components/MainBody'
import myFooter from './components/Footer'
export default {
  el: '#app',
  components: {
    myNav,
    myBody,
    myFooter
  }
}
</script>

<style>

</style>
