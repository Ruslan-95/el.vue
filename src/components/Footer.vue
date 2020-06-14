<template>
  <v-footer dark padless>
    <v-card flat tile class="dark lighten-1 white--text text-center">
      <v-card-text>
          <v-btn class="mx-4 white--text" v-for="({ icon, link }, i) in icons" :key="i" icon :href="link">
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Eltun</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/'
      },
      {
        icon: 'mdi-twitter',
        link: 'https://www.twitter.com/'
      },
      {
        icon: 'mdi-vk',
        link: 'https://www.vk.com/'
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/'
      }
    ]
  })
}
</script>

<style scoped>

</style>
