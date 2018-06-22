<template>
  <v-layout width="1000px">
      <v-navigation-drawer
        id="navigation"
        permanent
        dark
        value="false"
        width="300"
      >
        <v-list>
          <v-list-tile
            @click="screen = 'profile'"
          >
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile>
          <v-list-group
            prepend-icon="vpn_key"
            value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Security</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              @click="screen = 'signin'"
            >
              <v-list-tile-title>Sign in</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>security</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile
              @click="screen = 'twofactor'"
            >
              <v-list-tile-title>2-Factor</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>fingerprint</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile
              @click="screen = 'audit'"
            >
              <v-list-tile-title>Audit</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>find_in_page</v-icon>
              </v-list-tile-action>
            </v-list-tile>

          </v-list-group>
          <v-list-tile
            @click="screen = 'data'"
          >
            <v-list-tile-action>
              <v-icon>assessment</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Data</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

    <v-container id="content">
      <second-factor v-if="screen == 'twofactor'">
      </second-factor>
      <profile v-if="screen == 'profile'"></profile>
      <primary-factor v-if="screen == 'signin'"></primary-factor>
      <audit v-if="screen == 'audit'"></audit>
    </v-container>
  </v-layout>
</template>

<script>
    import SecondFactor from '@/components/SecondFactor'
    import PrimaryFactor from '@/components/PrimaryFactor'
    import Profile from '@/components/Profile'
    import Audit from '@/components/Audit'

    export default {
      name: 'TotpSetup',
      data () {
        return {
          drawer: true,
          screen: 'profile',
          codes: ['aaaa-aaaa-aaaaa', 'bbbb-bbbb-bbbb', 'ccccc-cccc-cccc'],
          items: [{
            title: 'Test',
            icon: 'vpn_key'
          }]
        }
      },
      components: {
        SecondFactor,
        PrimaryFactor,
        Profile,
        Audit
      }
    }
</script>

<style scoped>
  #navigation {
    display: inline-block;
  }

  #content {
    display: inline-block;
  }
</style>
