<template>
<v-content>
  <div style="text-align:center; padding-top:40px; padding-bottom: 40px">
    <h1 style="font-size: x-large" class="headline mb-0">Sign in to Quexten SSO</h1>
  </div>
  <v-card-actions>
    <v-btn block class="white--text" color="email" @click.native="$router.push('login-email')">
    <v-icon dark left>mail_outline</v-icon>
    Sign In With Email
    </v-btn>
  </v-card-actions>
  <v-card-actions>
    <v-btn block class="white--text" color="password" @click.native="$router.push('login-password')">
    <v-icon dark left>lock_open</v-icon>
    Sign In With Password
    </v-btn>
  </v-card-actions>
  <v-card-actions>
    <v-btn block class="white--text" color="google" @click.native="authenticateGoogle()">Sign In With Google</v-btn>
  </v-card-actions>
  <v-card-actions>
    <v-btn block class="white--text" color="facebook" @click.native="authenticateFacebook()">Sign In With Facebook</v-btn>
  </v-card-actions>
</v-content>
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
        alert: true,
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
      },
      requestPasswordReset: function (email) {
        var self = this
        self.forgotPassword(email)
      }
    }
  }
</script>
