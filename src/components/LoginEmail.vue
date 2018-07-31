<template>
<v-content>
  <div style="text-align:center; padding-top:20px;">
    <h1 style="font-size: x-large" class="headline mb-0">Enter Your Email To Login</h1>
  </div>
  <v-card-text>
    <v-text-field color="titlebar" @change="checkValidity" v-model="email" prepend-icon="email" name="email" label="Email" type="email" :rules="[(v) => !checkValidity() || 'Enter valid email']"></v-text-field>
  </v-card-text>
  <v-card-actions>
    <v-btn block dark :disabled="isDisabled" color="titlebar"  @click.native="requestEmailSignIn(email, () => {}).then((data) => { setAlert(true) })">Login</v-btn>
  </v-card-actions>

  <v-alert
    type="success"
    :value="alert"
    transition="scale-transition"
  > Login Email Sent, Check Your Emails
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
        emailValid: true,
        email: ''
      }
    },
    methods: {
      setAlert (show) {
        this.alert = show
      },
      checkValidity () {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return (this.email != null) && !re.test(String(this.email).toLowerCase())
      }
    },
    computed: {
      isDisabled () {
        return this.checkValidity()
      }
    },
    created: function () {
      this.$vuetify.theme.titlebar = this.$vuetify.theme.email
    }
  }
</script>
