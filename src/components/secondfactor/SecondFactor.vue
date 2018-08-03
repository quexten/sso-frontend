<template>
  <v-container>

    <v-dialog v-model="backupCodes" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Backup Codes</span>
        </v-card-title>
        <v-card-text>
          <backup-codes></backup-codes>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="backupCodes = false">continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="totp" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Mobile Authenticator</span>
        </v-card-title>
        <v-card-text>
          <totp-setup></totp-setup>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.native="totp = false">continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="u2f" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">U2F Setup</span>
        </v-card-title>
        <v-card-text>
          <u2-f-setup></u2-f-setup>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.native="u2f = false">continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card-title>
      <v-divider></v-divider>
      <h4 class="grey--text">2-Factor</h4>
      <v-divider></v-divider>
    </v-card-title>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" avatar @click="">
          <v-list-tile-avatar tile>
            <img :src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon color="error">delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y>
        <v-btn slot="activator" color="primary">
          Add
        </v-btn>
        <v-list>
          <v-list-tile @click="backupCodes = true">
            <v-avatar size="30" tile>
              <img src='https://quexten.com/U2F.svg'>
            </v-avatar>
            <v-list-tile-title>Backup Codes</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="totp = true">
            <v-avatar size="30" tile>
              <img src='https://quexten.com/Totp.svg'>
            </v-avatar>
            <v-list-tile-title>Mobile Authenticator</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="u2f = true">
            <v-avatar size="30" tile>
              <img src='https://quexten.com/U2F.svg'>
            </v-avatar>
            <v-list-tile-title>U2F Security Token</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-card-actions>
  </v-container>
</template>

<script>
  import BackupCodes from '@/components/secondfactor/BackupCodesSetup'
  import TotpSetup from '@/components/secondfactor/TotpSetup'
  import U2FSetup from '@/components/secondfactor/U2FSetup'

  export default {
    data () {
      return {
        backupCodes: false,
        totp: false,
        u2f: false,
        items: [
        ]
      }
    },
    components: {
      BackupCodes,
      TotpSetup,
      U2FSetup
    }
  }
</script>

<style scoped>

</style>
