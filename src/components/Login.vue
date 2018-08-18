<template>
<v-content>
  <v-card-actions>
    <v-spacer></v-spacer>
  </v-card-actions>
    <v-card-actions>
      <v-spacer></v-spacer>
    </v-card-actions>
  <v-card-actions>
    <v-btn block class="white--text" color="email" @click.native="$router.push('/login/email')">
    <v-icon dark left class="btnimgmail">mail_outline</v-icon>
    Sign In With Email
    </v-btn>
  </v-card-actions>
  <v-card-actions>
    <v-btn block class="white--text" color="google" @click.native="signInWithGoogle('http://quexten.pw:1024/%23/login/primarySignedIn')">
      <img class="btnimggoogle" height="44" width="44" decoding="async" alt="Quexten" src="../assets/btn_google.svg">
      Sign In With Google
    </v-btn>
  </v-card-actions>
  <v-card-actions>
    <v-btn block class="white--text" color="discord" @click.native="signInWithDiscord('http://quexten.pw:1024/%23/login/primarySignedIn')">
      <img class="btnimgdiscord" height="40" width="36" decoding="async" alt="Quexten" src="../assets/btn_discord.svg">
      Sign In With Discord
    </v-btn>
  </v-card-actions>
  <v-card-actions>
    <v-btn block class="white--text" color="steam" @click.native="signInWithSteam('http://quexten.pw:1024/%23/login/primarySignedIn')">
      <div style="clear: left">
        <img class="btnimgsteam" height="28" width="44" decoding="async" alt="Quexten" src="../assets/btn_steam.svg">

        Sign in with steam
      </div>
    </v-btn>
  </v-card-actions>
</v-content>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnimgmail {
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
}
.btnimggoogle {
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
}
.btnimgdiscord {
  position: absolute;
  left: -18px;
  top: 54%;
  transform: translateY(-50%);
}
.btnimgsteam {
  position: absolute;
  left: -22px;
  top: 50%;
  transform: translateY(-50%);
}
.btnimgfacebook {
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
}
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
      },
      alertUser: function (user) {
        if (this.user) {
          this.$router.push('profile')
        }
      }
    },
    created: function () {
      this.$vuetify.theme.titlebar = this.$vuetify.theme.primary
    }
  }
</script>
