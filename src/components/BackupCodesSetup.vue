<template>
  <v-content>
    <v-card-text>
      Here are your backup codes
    </v-card-text>
    <v-card-text dark>
      <v-spacer class="lightgrey">
        <span v-for="code in codes">
        {{code}}
        <br>
        </span>
      </v-spacer>
    </v-card-text>
    <v-card-text>
      Write them down, or download them and store theme somewhere safe, offline or in a password manager.
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">
        <v-icon left dark>get_app</v-icon>
        Download
      </v-btn>
    </v-card-actions>
  </v-content>
</template>

<script>
    export default {
      name: 'TotpSetup',
      data () {
        return {
          test: '123\ntest',
          codes: ['aaaa-aaaa-aaaaa', 'bbbb-bbbb-bbbb', 'ccccc-cccc-cccc']
        }
      }
    }
</script>

<style scoped>

</style>
