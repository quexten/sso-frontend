<template>
<v-content>
  <div style="text-align:center; padding-top:20px;">
    <h1 style="font-size: x-large" class="headline mb-0">Add this authenticator?</h1>
  </div>
  <v-card-actions>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
         <v-avatar :size="100" ><img src="https://s3.quexten.com/sso/avatars/9eeb2db43ab5540015d75e32_512.png"></v-avatar>
         <v-avatar :size="100" ><img src="../assets/btn_steam_dark.svg"></v-avatar>
      </v-flex>
    </v-layout>
  </v-card-actions>
  <v-card-actions>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <v-btn block dark color="titlebar"  @click.native="$store.dispatch('addPrimaryAuthenticator', token).then(() => { $router.push('/account') })">Add</v-btn>
      </v-flex>
    </v-layout>
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
        avatar: '',
        token: {}
      }
    },
    created: function () {
      this.$store.commit('setPrimaryAuthToken', this.$route.query.token)
      this.token = this.$store.getters.parsedPrimaryAuthToken

      this.$vuetify.theme.titlebar = this.$vuetify.theme.primary
      this.token = this.$store.getters.primaryAuthToken
      this.avatar = this.token.data.primaryAuthenticator.avatar
    }
  }
</script>
