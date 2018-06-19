<template>
  <v-content>
    <v-dialog v-model="showAuditLog" max-width="500px">
      <v-card>
        <v-card-title>
          Audit Log
        </v-card-title>
        <v-container style="height: 500px" class="scroll-y">
          <light-timeline :items='items'></light-timeline>
        </v-container>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="showAuditLog=false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card-actions>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card-actions>
      <v-divider></v-divider>
      <p>
        <h4 class="grey--text">Profile</h4>
      </p>
      <v-divider></v-divider>
    </v-card-actions>
    <v-card-actions>
      <v-select
            label="Profile Icon"
            :items="icons"
            v-model="avatar"
            item-text="name"
            item-value="name"
            max-height="auto"
            autocomplete
            v-on:input="changeAvatar(avatar)"
            color="accent"
          >
            <template slot="selection" slot-scope="data">
              <v-chip
                @input="data.parent.selectItem(data.item)"
                :selected="data.selected"
                class="chip--select-multi"
                :key="JSON.stringify(data.item)"
              >
                <v-avatar>
                  <img :src="data.item.avatar">
                </v-avatar>
                {{ data.item.name }}
              </v-chip>
            </template>
            <template slot="item" slot-scope="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-tile-content v-text="data.item"></v-list-tile-content>
              </template>
              <template v-else>
                <v-list-tile-avatar>
                  <img :src="data.item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                </v-list-tile-content>
              </template>
            </template>
          </v-select>
    </v-card-actions>
    <v-card-actions>
      <v-text-field
        label="Username"
        v-model="username"
        counter
        max="15"
        v-on:change="changeUsername(username)"
        color="accent"
      ></v-text-field>
    </v-card-actions>

    <v-card-actions>
      <v-divider></v-divider>
      <p>
        <h4 class="grey--text">Authentication</h4>
      </p>
      <v-divider>Test</v-divider>
    </v-card-actions>
    <v-card-actions>
      <v-btn block class="white--text" color="email" @click.native="clickEmailButton()" :outline="signedInWithEmail">
      <v-icon dark left class="btnimgmail">mail_outline</v-icon>
        {{ signedInWithEmail ? 'Connected' : 'Add' }} Email
        <div style="background-color: #7C4DFF; width: 35px; height: 35px; right: 0px; bottom: 0px; position: absolute;">
          <v-tooltip right class="avatar-right" v-if="signedInWithEmail">
            <v-avatar
              :tile="false"
              :size="30"
              slot="activator">
              <img class="avatar" :src="avatarEmail" alt="avatar">
            </v-avatar>
            <span>{{ this.user.email.email }}</span>
          </v-tooltip>
        </div>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn block class="white--text" color="google" @click.native="clickGoogleButton()" :outline="signedInWithGoogle">
        <img class="btnimggoogle" :height="signedInWithGoogle ? 40 : 44" :width="44" decoding="async" alt="Quexten" src="../assets/btn_google.svg">
        {{ signedInWithGoogle ? 'Connected' : 'Sign in with' }} Google
        <div style="background-color: #4885ed; width: 35px; height: 35px; right: 0px; bottom: 0px; position: absolute;">
          <v-tooltip right class="avatar-right" v-if="signedInWithGoogle">
            <v-avatar
              :tile="false"
              :size="30"
              slot="activator">
              <img class="avatar" :src="avatarGoogle" alt="avatar">
            </v-avatar>
            <span>{{ this.user.google.email }}</span>
          </v-tooltip>
        </div>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn block class="white--text" color="facebook" @click.native="clickFacebookButton()" :outline="signedInWithFacebook">
        <img class="btnimgfacebook" style="float: left;" height="28" width="28" alt="" src="../assets/btn_facebook_blue.png" v-if="signedInWithFacebook"/>
        <img class="btnimgfacebook" style="float: left;" height="28" width="28" alt="" src="../assets/btn_facebook.png" v-else/>
        <div style="clear: left">
        {{ signedInWithFacebook ? 'Connected' : 'Sign in with' }} Facebook
        <div style="background-color: #283593; width: 35px; height: 35px; right: 0px; bottom: 0px; position: absolute;">
          <v-tooltip right class="avatar-right" v-if="signedInWithFacebook">
            <v-avatar
              :tile="false"
              :size="30"
              slot="activator">
              <img class="avatar" :src="avatarFacebook" alt="avatar">
            </v-avatar>
            <span>{{ this.user.facebook.id }}</span>
          </v-tooltip>
        </div>
        </div>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn block class="white--text" color="accent" @click.native="showAuditLog = true" >
        open audit log
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-divider></v-divider>
    </v-card-actions>
    <v-card-actions>
      <v-btn block class="white--text" color="accent" @click.native="logout()" >
        logout
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn block class="white--text" color="error" disabled>
        Delete
      </v-btn>
    </v-card-actions>
  </v-content>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.googleAvatarCard {
  background-color: green;
}
.avatar-right {
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
}
.btnimgmail {
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
}
.btnimggoogle {
  position: absolute;
  left: -4px;
  top: 50%;
  transform: translateY(-50%);
}
.btnimgfacebook {
  position: absolute;
  left: 4px;
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
import LightTimeline from 'vue-light-timeline'

const md5 = require('js-md5')

export default {
  data () {
    return {
      avatar: 'Email',
      username: '',
      signedIn: false,
      wasSignedIn: false,
      signedInWithGoogle: false,
      signedInWithEmail: false,
      signedInWithFacebook: false,
      icons: [],
      avatarEmail: '',
      avatarGoogle: '',
      avatarFacebook: '',
      showAuditLog: true,
      items: [
        {
          tag: '2018-01-12',
          content: 'hallo'
        },
        {
          tag: '2018-01-13',
          color: '#dcdcdc',
          type: 'circle',
          content: 'world'
        },
        {
          type: 'star',
          tag: '2018-01-14',
          content: '=v ='
        }
      ]
    }
  },
  methods: {
    clickEmailButton: function () {
      if (!('email' in this.user)) {
        this.$router.push('/login-email')
      }
    },
    clickGoogleButton: function () {
      if (!('google' in this.user)) {
        // eslint-disable-next-line
        authenticateGoogle()
      }
    },
    clickFacebookButton: function () {
      if (!(('facebook') in this.user)) {
        // eslint-disable-next-line
        authenticateFacebook()
      }
    }
  },
  components: {
    LightTimeline
  },
  created: function () {
    this.subscribeToUser(user => {
      this.signedInWithEmail = (this.user != null) && (this.user.email != null)
      this.signedInWithGoogle = (this.user != null) && (this.user.google != null)
      this.signedInWithFacebook = (this.user != null) && (this.user.facebook != null)
      this.signedIn = this.signedInWithEmail || this.signedInWithGoogle || this.signedInWithFacebook
      if (this.wasSignedIn && !this.signedIn) {
        this.$router.push('/')
      }
      this.wasSignedIn = this.signedIn
      this.username = this.user && this.user.profile && this.user.profile.username
      this.icons = [{ header: 'Profile Icon' }]

      if (this.signedInWithEmail) {
        this.avatarEmail = 'https://www.gravatar.com/avatar/' + md5(this.user.email.email.toLowerCase().trim())
        this.icons.push({ name: 'Email', group: 'Via Gravatar', avatar: this.avatarEmail })
      }
      if (this.signedInWithGoogle) {
        this.avatarGoogle = 'https://pikmail.herokuapp.com/' + this.user.google.email + '?size=200'
        this.icons.push({ name: 'Google', avatar: this.avatarGoogle })
      }
      if (this.signedInWithFacebook) {
        this.avatarFacebook = 'https://graph.facebook.com/' + this.user.facebook.id + '/picture?type=large'
        this.icons.push({ name: 'Facebook', avatar: this.avatarFacebook })
      }

      if (this.user != null) {
        if ('profile' in this.user) {
          this.avatar = this.user.profile.avatar
        } else if ('avatar' in this) {
          if (this.user.email) {
            this.avatar = 'Email'
          } else if (this.user.google) {
            this.avatar = 'Google'
          } else if (this.user.facebook) {
            this.avatar = 'Facebook'
          }
        }
      }
    })
  }
}
</script>
