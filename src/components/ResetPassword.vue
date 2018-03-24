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
                  <h0 class="headline mb-0">Reset Password</h0>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-form>
                    <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" hint = "Pro tip: Use a password manager."
                 min="6" :rules="[(v) => v.search(/[A-Z]/) != -1 || 'Must contain uppercase',
                  (v) => v.search(/[a-z]/) != -1 || 'Must contain lowercase',
                  (v) => v.search(/\d/) != -1 || 'Must contain number',
                  (v) => v.length >= 6 || 'Min 6 characters',
                  (v) => v.length <= 100 || 'Max 100 characters']" :counter="100"></v-text-field>
                  </v-form>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary"  @click.native="reset(password)" > Reset</v-btn>
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
        password: ''
      }
    },
    methods: {
      reset: function (password) {
        var self = this
        self.resetPassword(this.token, this.userId, password)
        this.$router.push('/')
      }
    },
    created: function () {
      this.token = this.$route.query.token
      this.userId = this.$route.query.userId
    }
  }
</script>
