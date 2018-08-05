<template>
  <v-content class="audit py-0">
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
            <v-list-tile-title v-if="!smallLayout">{{names[item.type]}} ({{item.date.toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'})}})</v-list-tile-title>
            Aachen - Germany
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-pagination
      v-model="page"
      :length="pageCount"
      :total-visible="7"
      v-if="!smallLayout"
    ></v-pagination>
    <v-btn color="primary" v-if="smallLayout" :disabled="page == 1" @click="page --">Previous</v-btn>
    <v-btn color="primary" v-if="smallLayout" :disabled="page == pageCount" @click="page ++">Next</v-btn>

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
          <v-icon color="primary">stay_current_portrait</v-icon> {{selectedItem.useragent}}<br>
          <v-icon color="primary">date_range</v-icon> {{selectedItem.date.toLocaleString()}}
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
          page: 3,
          pageCount: 10,
          viewerOpen: false,
          selectedItem: null,
          items: [
            {
              origin: '127.0.0.1',
              date: new Date(Date.now()),
              useragent: 'Linux/Chrome',
              type: 'com.quexten.sso.signin',
              data: {
                provider: 'google'
              }
            },
            {
              origin: '127.0.0.1',
              date: new Date(Date.now()),
              useragent: 'Linux/Chrome',
              type: 'com.quexten.sso.signout',
              data: {
                provider: 'google'
              }
            },
            {
              origin: '127.0.0.1',
              date: new Date(Date.now()),
              useragent: 'Linux/Chrome',
              type: 'com.quexten.sso.add-primary-authenticator',
              data: {
                provider: 'google'
              }
            },
            {
              origin: '127.0.0.1',
              date: new Date(Date.now()),
              useragent: 'Linux/Chrome',
              type: 'com.quexten.sso.add-primary-authenticator',
              data: {
                provider: 'google'
              }
            },
            {
              origin: '127.0.0.1',
              date: new Date(Date.now()),
              useragent: 'Linux/Chrome',
              type: 'com.quexten.sso.add-primary-authenticator',
              data: {
                provider: 'google'
              }
            }
          ],
          names: {
            'com.quexten.sso.signin': 'Login',
            'com.quexten.sso.signout': 'Logout',
            'com.quexten.sso.add-primary-authenticator': 'Add Primary Authenticator',
            'com.quexten.sso.remove-primary-authenticator': 'Remove Primary Authenticator',
            'com.quexten.sso.add-secondary-authenticator': 'Add Secondary Authenticator',
            'com.quexten.sso.remove-secondary-authenticator': 'Remove Secondary Authenticator'
          },
          icons: {
            'com.quexten.sso.signin': 'add_to_queue',
            'com.quexten.sso.signout': 'remove_from_queue',
            'com.quexten.sso.add-primary-authenticator': 'security',
            'com.quexten.sso.remove-primary-authenticator': 'security',
            'com.quexten.sso.add-secondary-authenticator': 'fingerprint',
            'com.quexten.sso.remove-secondary-authenticator': 'fingerprint'
          }
        }
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
        }
      }
    }
</script>

<style scoped>
</style>
