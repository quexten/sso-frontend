<template>
  <v-content>
    <v-card-actions>
      <v-divider></v-divider>
      <h4 class="grey--text">Audit</h4>
      <v-divider></v-divider>
    </v-card-actions>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
        <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
        <v-list-tile v-else :key="item.title" avatar @click="">
          <v-list-tile-content>
            <v-list-tile-title>{{item.type}}</v-list-tile-title>
            {{item.origin}}
            <v-spacer></v-spacer>
            {{item.date.toString()}}
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-spacer></v-spacer>
  </v-content>
</template>

<script>
    export default {
      data () {
        return {
          items: [
            {
              origin: '127.0.0.1',
              date: new Date(Date.now()),
              useragent: 'Linux/Chrome',
              type: 'com.quexten.sso.signin',
              data: {
                provider: 'google'
              }
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
