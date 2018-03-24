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
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <h0 class="headline mb-0">Verify Your Email</h0>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary"  @click.native="verify()" > Verify</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
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
    data () {
      return {
      }
    },
    methods: {
      verify: function () {
        var self = this
        self.verifyEmail(this.token, this.userId)
        this.$router.push('/')
      }
    },
    created: function () {
      this.token = this.$route.query.token
      this.userId = this.$route.query.userId
    }
  }
</script>
