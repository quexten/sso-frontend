<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
              <v-toolbar-title>Quexten-SSO</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-content>
                <v-card-text>
                  <p>
                    <h3 class="grey--text">Cookies</h3>
                  </p>
                  <p>
                    Cookies stored are only used for authentication / login.
                    Under no circumstance will they be used to betray your privacy.
                  </p>
                  <p>
                    <h3 class="grey--text">What your personal info is used for:</h3>
                  </p>
                  <p>
                    <b>Email:</b> For authentication</p>
                    <p><b>Password:</b> For authentication</p>
                    <p><b>Username:</b> For authentication or as a display name at other services
                  </p>

                  <h3 class="grey--text">Data Policy</h3></p>
                  <p>
                    Your user account can be erased at any time on the profile page.
                    Third party sites will not be able to collect your personal
                    data through our services.</p>
                  <p>
                    - Quexten 15/03/2018
                  </p>
                </v-card-text>
              </v-content>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
  export default {
  }
</script>
