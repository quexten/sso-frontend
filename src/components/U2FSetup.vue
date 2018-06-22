<template>
  <v-content>
    <v-layout row justify-center>
        <v-progress-circular :size="75" :width="3" indeterminate color="grey">
          <v-icon large color="grey">vpn_key</v-icon>
        </v-progress-circular>
    </v-layout>
    <v-layout justify-center>
      <p class="text-md-center">Insert your Security Key</p>
    </v-layout>
  </v-content>
</template>

<script>
    export default {
      name: 'TotpSetup',
      data () {
        return {
          codes: ['aaaa-aaaa-aaaaa', 'bbbb-bbbb-bbbb', 'ccccc-cccc-cccc']
        }
      }
    }
</script>

<style scoped>

</style>
