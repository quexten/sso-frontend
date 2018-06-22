<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-space-between>
      <v-flex xs2>
      </v-flex>
      <v-flex xs4>
          <v-progress-circular :size="75" :width="3" indeterminate color="grey">
            <v-icon large color="grey">vpn_key</v-icon>
          </v-progress-circular>
      </v-flex>
      <v-flex xs2>
      </v-flex>
    </v-layout>
    <p class="text-md-center">Insert your Security Key</p>

    <v-container>
      <v-card-actions>
        <v-divider></v-divider>
        <p class="text-md-center">or</p>
        <v-divider></v-divider>
      </v-card-actions>
    </v-container>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">Code from your Authenticator App</div>
        <v-card>
        <v-card-text>
          <v-form>
            <v-text-field v-model="timed_code" prepend-icon="vpn_key" name="timed_code" label="Timed Code"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Enter</v-btn>
        </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <div slot="header">Enter one of your Backup Codes</div>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="backupCode" prepend-icon="vpn_key" name="backupCode" label="Backup Code"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Enter</v-btn>
          </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>

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
        test: ''
      }
    },
    methods: {
    },
    created: function () {
    }
  }
</script>
