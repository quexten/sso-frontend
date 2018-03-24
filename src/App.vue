<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Quexten</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Quexten-SSO'
    }
  },
  name: 'App'
}
</script>
