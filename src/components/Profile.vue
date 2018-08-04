<template>
  <v-content>
    <v-card-actions>
      <v-divider></v-divider>
        <h4 class="grey--text">Profile</h4>
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
            v-on:input=""
            color="primary"
          >
            <template slot="selection" slot-scope="data">
              <v-chip
                @input="data.parent.selectItem(data.item)"
                :selected="data.selected"
                class="chip--select-multi"
                :key="JSON.stringify(data.item)"
              >
                <v-avatar>
                  <img src="https://s3.eu-central-1.amazonaws.com/quexten/avatar_1920.png">
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
        v-bind:change="updateProfile(0, { username: username })"
        color="primary"
      ></v-text-field>
    </v-card-actions>
    <v-card-actions>
      <v-btn block outline color="primary">Logout</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn block outline color="error">Delete</v-btn>
    </v-card-actions>

  </v-content>

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
      avatar: 'https://s3.eu-central-1.amazonaws.com/quexten/avatar_1920.png',
      username: 'USERNAME',
      icons: [
        {
          name: 'Email (Gravatar)',
          avatar: 'https://s3.eu-central-1.amazonaws.com/quexten/avatar_1920.png'
        }
      ]
    }
  },
  created: function () {
    this.username = 'test'
    this.getProfile(0).then((profile) => {
      this.username = profile.username
    })
  }
}
</script>
