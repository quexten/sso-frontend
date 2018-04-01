<template>
            <v-content>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="username" prepend-icon="person" name="username" label="Username"></v-text-field>
                    <v-text-field v-model="email" prepend-icon="email" name="email" label="Email"></v-text-field>
                    <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password" hint = "Pro tip: Use a password manager."
                 min="14" :rules="[(v) => v.length >= 6 || 'Min 6 characters',(v) => v.length <= 100 || 'Max 100 characters']" :counter="100"></v-text-field>
                    <v-text-field v-model="newPassword" prepend-icon="lock" name="new_password" label="New Password" id="new_password" type="password" hint = "Pro tip: Use a password manager."
                 min="14" :rules="[(v) => v.length >= 6 || 'Min 6 characters',(v) => v.length <= 100 || 'Max 100 characters']" :counter="100"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary"  @click.native="update(username, password, newPassword)"> Update</v-btn>
                  <v-btn color="primary"  @click.native="logout(setLoggedIn)"> Logout</v-btn>
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
      this.checkUser(this.setLoggedIn)
    }
  }
</script>
