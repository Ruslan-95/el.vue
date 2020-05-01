<template>
  <v-app id="#about">
    <h1>About</h1>
    <transition name="fade">
      <h2>About h2</h2>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }
</style>
