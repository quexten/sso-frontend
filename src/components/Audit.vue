<template>
  <v-content v-bind:style="contentStyle" class="audit py-0">
    <v-card-actions>
      <v-divider></v-divider>
      <h4 class="grey--text">Audit</h4>
      <v-divider></v-divider>
    </v-card-actions>
    <v-list two-line>
      <template ripple v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
        <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
        <v-list-tile ripple v-else :key="item.title" avatar @click="selectedItem = item; viewerOpen = true" class="elevation-5 my-3">
          <v-icon class="event-icon mr-2">{{icons[item.type]}}</v-icon>
          <v-list-tile-content>
            <v-list-tile-title v-if="!smallLayout">{{names[item.type]}} ({{new Date(Date.parse(item.time)).toLocaleTimeString('en-us', {hour: '2-digit', minute: '2-digit'})}})</v-list-tile-title>
            Aachen - Germany
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-pagination
      v-model="page"
      :length="Math.ceil(items.length / 5)"
      :total-visible="7"
      v-if="!smallLayout"
    ></v-pagination>
    <v-btn color="primary" v-if="smallLayout" :disabled="page == 1" @click="page --">Previous</v-btn>
    <v-btn color="primary" v-if="smallLayout" :disabled="page >= Math.ceil(items.length / 5)" @click="page ++">Next</v-btn>

    <v-dialog
      v-model="viewerOpen"
      width="500"
    >
      <v-card v-if="viewerOpen">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{names[selectedItem.type]}}
        </v-card-title>

        <v-card-text>
          <v-icon color="primary">location_on</v-icon> Aachen - Germany ({{selectedItem.origin}})<br>
          <v-icon color="primary">stay_current_portrait</v-icon> {{selectedItem.userAgent}}<br>
          <v-icon color="primary">date_range</v-icon> {{new Date(selectedItem.time).toLocaleString()}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="viewerOpen = false"
          >
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
    export default {
      data () {
        return {
          page: 1,
          viewerOpen: false,
          selectedItem: null,
          items: [
          ],
          names: {
            'com.quexten.sso.createUser': 'Create User',
            'com.quexten.sso.signin': 'Login',
            'com.quexten.sso.signout': 'Logout',
            'com.quexten.sso.addPrimaryAuthenticator': 'Add Primary Authenticator',
            'com.quexten.sso.remove-primary-authenticator': 'Remove Primary Authenticator',
            'com.quexten.sso.add-secondary-authenticator': 'Add Secondary Authenticator',
            'com.quexten.sso.remove-secondary-authenticator': 'Remove Secondary Authenticator'
          },
          icons: {
            'com.quexten.sso.createUser': 'person_add',
            'com.quexten.sso.signin': 'add_to_queue',
            'com.quexten.sso.signout': 'remove_from_queue',
            'com.quexten.sso.addPrimaryAuthenticator': 'security',
            'com.quexten.sso.remove-primary-authenticator': 'security',
            'com.quexten.sso.add-secondary-authenticator': 'fingerprint',
            'com.quexten.sso.remove-secondary-authenticator': 'fingerprint'
          }
        }
      },
      created: function () {
        this.items = this.$store.getters.audit.slice().reverse()
      },
      computed: {
        smallLayout () {
          switch (this.$vuetify.breakpoint.name) {
            case 'xs': return true
            case 'sm': return false
            case 'md': return false
            case 'lg': return false
            case 'xl': return false
          }
        },
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
</style>
