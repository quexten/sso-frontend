<template>
  <v-content>
    <v-card-text>
      <v-list subheader>
        <v-subheader>Authentication Services</v-subheader>
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
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-menu bottom offset-y>
        <v-btn slot="activator" color="primary">
          Add
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in options" :key="i" @click="">
            <v-avatar size="30" tile>
              <img :src="item.avatar">
            </v-avatar>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-card-actions>
  </v-content>
</template>

<script>
  export default {
    name: 'TotpSetup',
    data () {
      return {
        codes: ['aaaa-aaaa-aaaaa', 'bbbb-bbbb-bbbb', 'ccccc-cccc-cccc'],
        options: [
          { active: true, title: 'Email', avatar: 'https://image.flaticon.com/icons/svg/126/126516.svg' },
          { title: 'Facebook', avatar: 'https://raw.githubusercontent.com/Quexten/sso-frontend/master/src/assets/btn_facebook_blue.png' },
          { title: 'Google', avatar: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }
        ],
        items: [
          { active: true, title: 'Email', avatar: 'https://image.flaticon.com/icons/svg/126/126516.svg' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
