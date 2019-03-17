<template>
<v-content>
  <div style="text-align:center; padding-top:20px;">
    <h1 style="font-size: x-large" class="headline mb-0">Connect this account?</h1>
  </div>
  <v-card-actions>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
         <v-avatar :size="100" ><img :src="avatar"></v-avatar>
         <v-avatar :size="100" >
           <img v-if="parsedToken.strategy == 'steam'" src="../assets/btn_steam.svg">
           <img v-if="parsedToken.strategy == 'discord'" src="../assets/btn_discord_dark.svg">
           <img v-if="parsedToken.strategy == 'google'" src="../assets/btn_google.svg">
           <v-icon v-if="parsedToken.strategy == 'mail'" dark left class="btnimgmail">mail_outline</v-icon>
         </v-avatar>
      </v-flex>
    </v-layout>
  </v-card-actions>
  <v-card-actions>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <v-btn block dark color="titlebar"  @click.native="$store.dispatch('addPrimaryAuthenticator', token)">Connect</v-btn>
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
        token: '',
        parsedToken: {}
      }
    },
    created: function () {
      this.$store.commit('setPrimaryAuthToken', this.$route.query.token)
      this.parsedToken = this.$store.getters.parsedPrimaryAuthToken
      this.avatar = this.parsedToken.primaryAuthenticator.avatar

      this.$vuetify.theme.titlebar = this.$vuetify.theme.primary
      this.token = this.$store.getters.primaryAuthToken
    }
  }
</script>
