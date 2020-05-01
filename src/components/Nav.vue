<template>
  <v-app-bar app dark height="100">

    <!--    лого-->
    <v-avatar
      class="mr-3"
      color="grey darken-1"
      size="70"
      left>
      <v-img
        contain
        max-height="70%"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      ></v-img>
    </v-avatar>

    <!--    телефон-->
    <v-toolbar-items>
      <v-btn to="tel:89591519651">
        Позвонить
      </v-btn>
    </v-toolbar-items>

  </v-app-bar>

</template>

<script>
export default {
  name: 'Nav',
  computed: {
    navItems () {
      return [
        {
          icon: 'supervised_user_circle',
          title: 'Биогррафия',
          route: '/about'
        },
        {
          icon: 'supervised_user_circle',
          title: 'Отзывы',
          route: '/feedback'
        },
        {
          icon: 'supervised_user_circle',
          title: 'faq',
          route: '/faq'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
