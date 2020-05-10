<template>
  <v-app-bar dark class="nav">
    <v-toolbar-items class="toolbar-items">
      <v-btn text to="/about">
        Обо мне
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items class="toolbar-items">
      <v-btn text to="/individ">
        Физичческим лицам
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items class="toolbar-items">
      <v-btn text to="/legal">
        Юредическим лицам
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn text>
        <router-link to="/">
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
        </v-avatar></router-link>
      </v-btn>

    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn to="/crash" text>
        Банкротство
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items class="toolbar-items">
      <v-btn text to="/about">
        Оставить заявку
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items class="toolbar-items">
      <v-btn text to="/contacts">
        Контакты
      </v-btn>
    </v-toolbar-items>

  </v-app-bar>

</template>

<script>

</script>

<style scoped lang="scss">
  .nav {
    opacity: .9;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1;
     &:hover {
       opacity: 1;
       transition: ease-in .4s;
     }

    .v-toolbar-items {
      border: 1px solid red;
    }
  }
</style>
