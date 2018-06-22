<template>
  <v-app >
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md7>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
              <v-toolbar-title>{{this.$router.history.current.name}}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <router-view/>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Quexten </span>
      <v-spacer></v-spacer>
      <router-link to="/privacy"> Privacy </router-link>
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
