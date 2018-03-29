<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
              <v-toolbar-title>Quexten-SSO</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-content>
                <router-view/>
              </v-content>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
