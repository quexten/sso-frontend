<template>
<v-content>
  <div style="text-align:center; padding-top:20px;">
    <h1 style="font-size: x-large" class="headline mb-0">Enter Your Email To Login</h1>
  </div>
  <v-card-text>
    <v-text-field v-model="email" prepend-icon="email" name="email" label="Email" type="email"></v-text-field>
  </v-card-text>
  <v-card-actions>
    <v-btn block color="primary"  @click.native="alert = true">Login</v-btn>
  </v-card-actions>

  <v-alert
    type="success"
    :value="alert"
    transition="scale-transition"
  > Login Email Sent, Check Your Mail
  </v-alert>
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
        alert: false,
        email: ''
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
