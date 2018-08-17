<template>
<v-content>
  <div style="text-align:center; padding-top:20px;">
    <h1 style="font-size: x-large" class="headline mb-0">No account under this sign-in</h1>
  </div>
  <v-card-actions>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
         <v-avatar :size="100" ><img :src="avatar"></v-avatar>
      </v-flex>
    </v-layout>
  </v-card-actions>
  <v-card-actions>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <v-btn block dark color="titlebar"  @click.native="$store.dispatch('createUser', token)">Create</v-btn>
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
        parsedPrimaryAuthToken: {},
        token: ''
      }
    },
    created: function () {
      this.$vuetify.theme.titlebar = this.$vuetify.theme.primary
      this.token = this.$cookie.get('com.quexten.sso.primaryAuthenticatorToken')
      this.parsedPrimaryAuthToken = this.decode(this.token)
      this.avatar = this.parsedPrimaryAuthToken.primaryAuthenticator.avatar
    }
  }
</script>
