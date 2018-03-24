<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
              <v-toolbar-title>Quexten-SSO</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-content v-if='!loggedIn'>
                <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" hint = "Pro tip: Use a password manager."
               min="6" :rules="[(v) => v.search(/[A-Z]/) != -1 || 'Must contain uppercase',
                (v) => v.search(/[a-z]/) != -1 || 'Must contain lowercase',
                (v) => v.search(/\d/) != -1 || 'Must contain number',
                (v) => v.length >= 6 || 'Min 6 characters',
                (v) => v.length <= 100 || 'Max 100 characters']" :counter="100"></v-text-field>
                </v-form>


                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary"  @click.native="register(email, password, setLoggedIn)"> Register</v-btn>
                  <v-btn color="primary"  @click.native="loginWithEmailPassword(email, password, setLoggedIn)">Login</v-btn>
                </v-card-actions>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary">Forgot password?</v-btn>
                </v-card-actions>
                <v-card-actions>
                  <v-btn outline block color="google">Sign In With Google</v-btn>
                </v-card-actions>
                <v-card-actions>
                  <v-btn outline block color="facebook">Sign In With Facebook</v-btn>
                </v-card-actions>
              </v-content>
              <v-content v-if='loggedIn'>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="username" prepend-icon="person" name="username" label="Username"></v-text-field>
                    <v-text-field v-model="email" prepend-icon="email" name="email" label="Email"></v-text-field>
                    <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" hint = "Pro tip: Use a password manager."
                 min="14" :rules="[(v) => v.length >= 14 || 'Min 14 characters',(v) => v.length <= 100 || 'Max 100 characters']" :counter="100"></v-text-field>
                    <v-text-field v-model="newPassword" prepend-icon="lock" name="new_password" label="New Password" id="new_password" type="password" hint = "Pro tip: Use a password manager."
                 min="14" :rules="[(v) => v.length >= 14 || 'Min 14 characters',(v) => v.length <= 100 || 'Max 100 characters']" :counter="100"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary"  @click.native="update(username, password, newPassword)"> Update</v-btn>
                  <v-btn color="primary"  @click.native="logout(setLoggedIn)"> Logout</v-btn>
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
        username: '',
        email: '',
        password: '',
        newPassword: '',
        loggedIn: false
      }
    },
    methods: {
      setLoggedIn: function (value, user) {
        this.loggedIn = value
        if (value) {
          this.username = user.username
          this.email = user.email
        }
      },
      setCookie: function (key, value) {
        this.$cookie.set(key, value, {expires: '1M', domain: 'quexten.com'})
      },
      update: function (username, oldPassword, newPassword) {
        var self = this
        if (!(newPassword.length === 0)) {
          self.changePassword(oldPassword, newPassword)
        }
        if (!(username.length === 0)) {
          self.changeUsername(username)
        }
      }
    },
    created: function () {
      var self = this
      self.checkUser(self.setLoggedIn)
    }
  }
</script>
