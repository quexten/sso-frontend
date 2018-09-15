<template>
  <v-content v-bind:style="contentStyle">
    <v-card-title>
      <v-divider></v-divider>
      <h4 class="grey--text">Sign in options</h4>
      <v-divider></v-divider>
    </v-card-title>
    <v-card-text>
      <v-list subheader>
        <v-list-tile ripple class="elevation-5 my-3" v-for="item in items" :key="item.title" avatar @click="">
          <v-list-tile-avatar v-if="item.type==='steam'">
            <img class="avatar" src="../assets/btn_steam_dark.svg">
            <img :src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-avatar v-if="item.type==='discord'">
            <img class="avatar" src="../assets/btn_discord_dark.svg">
            <img :src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-avatar v-if="item.type==='google'">
            <img class="avatar" src="../assets/btn_google.svg">
            <img :src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-avatar v-if="item.type==='mailgun'">
            <v-icon left class="avatar-mail">mail_outline</v-icon>
            <img :src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y>
        <v-btn slot="activator" color="primary">
          Add
        </v-btn>
        <v-list>
          <v-list-tile ripple v-for="(item, i) in options" :key="i" @click="signIn(item.title)">
            <v-list-tile-avatar v-if="item.title==='Steam'">
              <img src="../assets/btn_steam_dark.svg">
            </v-list-tile-avatar>
            <v-list-tile-avatar v-if="item.title==='Discord'">
              <img src="../assets/btn_discord_dark.svg">
            </v-list-tile-avatar>
            <v-list-tile-avatar v-if="item.title==='Google'">
              <img src="../assets/btn_google.svg">
            </v-list-tile-avatar>
            <v-list-tile-avatar v-if="item.title==='Mailgun'">
              <v-icon >mail_outline</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-card-actions>
  </v-content>
</template>

<script>
  export default {
    name: 'SignInOptions',
    data () {
      return {
        options: [
          { active: true, title: 'Mailgun' },
          { active: true, title: 'Google' },
          { active: true, title: 'Steam' },
          { active: true, title: 'Discord' }
        ],
        items: []
      }
    },
    methods: {
      signIn: function (title) {
        switch (title) {
          case 'Mailgun':
            break
          case 'Google':
            this.signInWithGoogle('http://localhost:1024/%23/addPrimaryAuthenticator')
            break
          case 'Discord':
            this.signInWithDiscord('http://localhost:1024/%23/addPrimaryAuthenticator')
            break
          case 'Steam':
            this.signInWithSteam('http://localhost:1024/%23/addPrimaryAuthenticator')
            break
        }
      }
    },
    created: function () {
      this.items = this.$store.getters.primaryAuthenticators.map((authenticator) => {
        return {
          title: authenticator.type.charAt(0).toUpperCase() + authenticator.type.substr(1),
          id: authenticator.id,
          type: authenticator.type,
          avatar: authenticator.avatar
        }
      })
    },
    computed: {
      contentStyle () {
        let left = this.$vuetify.breakpoint.name === 'xs' ? '80px' : '150px'
        return {
          position: 'absolute',
          top: '70px',
          left: left,
          right: '15px'
        }
      }
    }
  }
</script>

<style scoped>
  .avatar {
    position: absolute;
    transform: scale(0.5) translate(75%, 75%);
  }
  .avatar-mail {
    position: absolute;
    transform: scale(0.7) translate(55%, 55%);
  }
</style>
